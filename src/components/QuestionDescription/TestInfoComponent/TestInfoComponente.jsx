import React, { useRef, useState } from 'react';
import './TestInfoComponent.css'



function TesteInfoComponent(props) {
    const [teste, setTeste] = useState(false);
    const componentRef = useRef(null)
    const arrowRef= useRef(null)

    function extendComponent() {
        if (teste) {
            componentRef.current.style.display = "block";
            arrowRef.current.classList.add('rotate');
            setTeste(false)
        }
        else {
            componentRef.current.style.display = "none";
            arrowRef.current.classList.remove('rotate'); 
            setTeste(true)
        }
    }
    return (
        <>
            <div className="component" onClick={extendComponent}>
                <p><span ref={arrowRef} className={`arrow ${props.isCorreto ? 'approved': 'notApproved'}`}>&gt;</span> {props.object.description}</p>
            </div>
            <div className="component-info" ref={componentRef}>
                <p>{props.object.passed}</p>
                <p>{props.object.result}</p>
            </div>
        </>
    );
}

export default TesteInfoComponent;