import React, { useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import './Code.css'
import { andromeda} from '@uiw/codemirror-theme-andromeda'


function CodeMirrorEditor(props) {
    const [userCode,setUserCode] = useState(`function soma(n1,n2){\n\n    \n\n}`);

    let defaultCode = `function soma(n1,n2){\n\n    \n\n}`;

    const onChange = React.useCallback((value, viewUpdate) => {
        setUserCode(value);
    }, []);


    function removerQuebrasDeLinha(texto) {
        return texto.replace(/(\r\n|\n|\r)/g, '');
    }

    async function handleForm() {
        console.log("Texto enviado para request: " + userCode);
        const modifiedUserCode = await removerQuebrasDeLinha(userCode);

        fetch('http://26.30.244.54:8080/teste', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem('auth-test')
            },
            body: JSON.stringify({ script: modifiedUserCode, exercise: { id: 2 } }), // Correção: Enviar como corpo da solicitação
        })
            .then(res => res.json())
            .then(res => {
                props.handleResult(res)
                props.codigoEnviado("Output")
            });
    }

    return (
        <div className="side">
            <div className="editor-wrapper">
                <div className="top-bar"><h3>Digite seu codigo</h3></div>
                <CodeMirror className='editor'
                    theme={andromeda}
                    value={defaultCode}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                    height='400px'
                />
            </div>
            <div onClick={handleForm} className="send-btn">
                <span>Enviar</span>
            </div>
        </div>
    );
}

export default CodeMirrorEditor;