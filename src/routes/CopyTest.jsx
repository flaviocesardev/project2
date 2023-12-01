import { useEffect, useState, useRef } from 'react';
import './CopyTest.css';

function CopyTest() {
    const formRef = useRef(null);
    const [topics, setTopics] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState("0");
    const [selectedTopicData, setSelectedTopicData] = useState(null);
    const [topicSelected, setTopicSelected] = useState(false); // Estado para controlar se um tópico foi selecionado
    const [copyFinderTestResult, setCopyFinderTestResult] = useState(null);


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
                    setTopics(data);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const exerciseID = formRef.current.exercise.value;
        fetch(`http://26.30.244.54:8080/test/professor/copy/${exerciseID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('auth-test')
            }
        }).then(response => response.json())
            .then(data => {
                setCopyFinderTestResult(data);
                console.log(copyFinderTestResult)
            })
            .catch(error => {
                console.error('Erro ao buscar dados do tópico:', error);
            });
    };


    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedTopic(selectedValue);
        getExercises(selectedValue);
        setTopicSelected(true);
    };

    const renderCopyResults = () => {
        if (copyFinderTestResult) {
            return (
                <div>
                    {copyFinderTestResult.map((result, index) => (
                        <div key={index}>
                            <h3 style={{color:'#fff'}}>Resultado {index + 1}</h3>
                            <ul>
                                {result.entities.map((entity, idx) => (
                                    <li key={idx}>
                                        <p>Origem: {entity.origin}</p>
                                        <p>Individual: {entity.individual}</p>
                                        <p>Distância: {entity.distance}</p>
                                        <p>Status: <span className={entity.status}>{entity.status}</span></p>
                                        <br />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            );
        } else {
            return <p>Aguardando resultados da verificação de cópia...</p>;
        }
    };




    const getExercises = (selectedValue) => {
        console.log(`Valor selecionado: ${selectedValue}`);

        fetch(`http://26.30.244.54:8080/topic/exercises/${selectedValue}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('auth-test')
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                setSelectedTopicData(data);

            })
            .catch(error => {
                console.error('Erro ao buscar dados do tópico:', error);
            });
    };

    return (
        <div className="copy-test-wrapper">
            <div className="copy-form-wrapper">
                <form ref={formRef} className='copy-form' onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Assunto:
                            <select name="topic" value={selectedTopic} onChange={handleSelectChange}>
                                <option value="0" disabled>
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
                    {topicSelected && (
                        <div>
                            <label>
                                Exercício
                                <select name="exercise">
                                    <option value="0" disabled>
                                        Selecione um exercício
                                    </option>
                                    {selectedTopicData &&
                                        selectedTopicData.map(exercise => (
                                            <option key={exercise.id} value={exercise.id}>
                                                {exercise.title}
                                            </option>
                                        ))
                                    }
                                </select>
                            </label>
                        </div>
                    )}
                    <button type='submit'>Verificar Copia</button>
                </form>
            </div>

            <div className="copy-result">
                {renderCopyResults()}
            </div>

        </div>
    );
}

export default CopyTest;