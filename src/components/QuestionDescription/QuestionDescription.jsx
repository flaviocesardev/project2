import './QuestionDescripition.css'


function QuestionDescripition() {
    return (

        <div className="question-wrapper">
            <h1>Soma</h1>
            <p>
                Implemente um subprograma capaz de, dado dois número como parâmetro, retornar a sua soma.
            </p>

            <p>Exemplo de entrada</p>

            <pre className='high'>
                {`n1 = 5, n2 + 2`}
            </pre>

            <p>Saida esperada</p>
            <pre className='high'>
                {`7`}
            </pre>


        </div>

    );
}

export default QuestionDescripition;