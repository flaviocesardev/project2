import TesteInfoComponent from '../QuestionDescription/TestInfoComponent/TestInfoComponente';
import './QuestionOutput.css'

function QuestionOutput(props) {
    if (props.result != null) {
        console.log("dados dentro do output: ", props.result.isCorreto)
        return (
            <div className={`wrapper ${props.result.isCorreto === true ? 'approved' : 'notApproved'}`} >
                <p className={`title ${props.result.isCorreto === true ? 'approved' : 'notApproved'}`}>Resultados</p>
                {props.result.results.map((info, index) => (
                    <TesteInfoComponent key={index} object={info} />
                ))}
            </div>
        )
    }else{

        return (
            <div className="wrapper">
                <p>Seus resultados serão exibidos aqui.</p>
            </div>
        );
    }

}

export default QuestionOutput;