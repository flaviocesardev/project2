import React, { useState, useEffect } from 'react';
import './CreateExercise.css'

function CreateExercise() {
    const [exerciseData, setExerciseData] = useState({
        topic: '',
        title: '',
        question: '',
        input: '',
        output: '',
    });

    const [topics, setTopics] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://26.30.244.54:8080/topic/all`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('auth-test')
                    }
                });

                if (response.status === 403) {
                    console.log("O token expirou");
                    logoutUser();
                } else {
                    const data = await response.json();
                    setTopics(data)
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchData();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExerciseData({ ...exerciseData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(exerciseData)

        let response = await fetch('http://26.30.244.54:8080/exercise/create', {
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
        setExerciseData({
            topic: '',
            title: '',
            question: '',
            input: '',
            output: '',
        });

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
                        {topics &&
                            topics.map(topic => (
                                <option key={topic.id} value={topic.id}>
                                    {topic.title} 
                                </option>
                            ))
                        }
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