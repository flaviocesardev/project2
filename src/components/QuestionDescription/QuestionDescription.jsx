import { useEffect, useState } from 'react';
import './QuestionDescripition.css'
import { useParams } from 'react-router-dom';


function QuestionDescripition() {
    const [dados, setDados] = useState(null);

    const { exerciseID } = useParams();
    console.log(exerciseID)
    useEffect(() => {

        fetch(`http://26.30.244.54:8080/exercise/${exerciseID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('auth-test')
            }
        }).then(res => res.json()).then(res => { setDados(res), console.log(dados) });
    }, []);

    return (

        <div className="question-wrapper">

            {dados ? (
                <>
                    <h1>{dados.title}</h1>
                    <p>
                        {dados.question}
                    </p>

                    <p>Exemplo de entrada</p>

                    <pre className='high'>
                        {dados.input}
                    </pre>

                    <p>Saida esperada</p>
                    <pre className='high'>
                        {dados.output}
                    </pre>
                </>
            ) : (
                <p>Carregando...</p>
            )}

        </div>
    );
}

export default QuestionDescripition;