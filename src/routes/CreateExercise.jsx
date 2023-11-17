import React, { useState } from 'react';
import './CreateExercise.css'

function CreateExercise() {
    const [exerciseData, setExerciseData] = useState({
        topic: '',
        title: '',
        question: '',
        input: '',
        output: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExerciseData({ ...exerciseData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(exerciseData)




        // Aqui você pode lidar com os dados do exercício, como enviá-los para um servidor ou fazer outra operação
        // console.log("exercise sended: ", exerciseToSend);

        let response = await fetch('http://26.30.244.54:8080/exercise/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('auth-test')
            },
            body: JSON.stringify({
                title: exerciseData.title,
                input: exerciseData.input,
                output: exerciseData.output,
                question: exerciseData.question,
                topic: {
                    id: exerciseData.topic,
                }
            }),
        });

        let data = await response.json()

        console.log(data)


        // Limpar o formulário após o envio, se necessário
        // setExerciseData({
        //     topic: '',
        //     title: '',
        //     description: '',
        //     input: '',
        //     output: '',
        // });
    };

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div>
                <label>
                    Assunto:
                    <select name="topic" value={exerciseData.topic} onChange={handleInputChange}>
                        <option value="" disabled>
                            Selecione um assunto
                        </option>
                        <option value="1">Subprogramas</option>
                        <option value="2">Array</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Título:
                    <input type="text" name="title" value={exerciseData.title} onChange={handleInputChange} />
                </label>
            </div>
            <div>
                <label>
                    Descrição:
                    <textarea name="question" value={exerciseData.question} onChange={handleInputChange} />
                </label>
            </div>
            <div>
                <label>
                    Entrada:
                    <input type="text" name="input" value={exerciseData.input} onChange={handleInputChange} />
                </label>
            </div>
            <div>
                <label>
                    Saída Esperada:
                    <input type="text" name="output" value={exerciseData.output} onChange={handleInputChange} />
                </label>
            </div>
            <button type="submit">Criar Exercício</button>
        </form>
    );
}

export default CreateExercise;