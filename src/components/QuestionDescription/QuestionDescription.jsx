import { useEffect } from 'react';
import './QuestionDescripition.css'
import { useState } from 'react';


function QuestionDescripition() {
    const [dados, setDados] = useState(null);
    useEffect(() => {

        // fetch('http://26.30.244.54:8080/exercise/1', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': localStorage.getItem('auth-test')
        //     }
        // }).then(res => res.json()).then(res => { setDados(res), console.log(dados.exercise) });
    }, []);

    return (

        <div className="question-wrapper">

            {/* {dados ? (
                <>
                    <h1>{dados.exercise.title}</h1>
                    <p>
                        {dados.exercise.question}
                    </p>

                    <p>Exemplo de entrada</p>

                    <pre className='high'>
                        {dados.exercise.input}
                    </pre>

                    <p>Saida esperada</p>
                    <pre className='high'>
                        {dados.exercise.output}
                    </pre>
                </>
            ) : (
                <p>Carregando...</p>
            )} */}

        </div>
    );
}

export default QuestionDescripition;