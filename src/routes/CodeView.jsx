import React, { useState } from 'react';
import CodeMirrorEditor from '../components/CodeMirror/CodeMirrorEditor';
import QuestionDescripition from '../components/QuestionDescription/QuestionDescription';
import QuestionOutput from '../components/QuestionOutput/QuestionOutput';
import '../assets/CodeView.css';

function App() {

  const [value, setValue] = useState("Description");

  const [testeResult, setTestResult] = useState(null)

  const updateValue = r => {
    setValue(r);
  }
  const updateResult = r => {
    setTestResult(r);
  }

  return (

    <div className='app-wrapper'>
      <div className="left">
        <div className='buttons-wrapper'>
          <button onClick={() => setValue("Description")} className={value === "Description" ? "current" : null}>Descrição</button>
          <button onClick={() => setValue("Output")} className={value === "Output" ? "current" : null}>Output</button>
        </div>
        {value === "Description" ? <QuestionDescripition /> : null}
        {value === "Output" ? <QuestionOutput result={testeResult} /> : null}
      </div>
      <CodeMirrorEditor handleResult={updateResult} codigoEnviado={updateValue} />
    </div>
  );
}
export default App;