import { useState, useEffect } from "react";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import './Topic.css'

function Topic(props) {
    const [topics, setTopics] = useState(null);
    const [showExercises, setShowExercises] = useState({});

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
                    console.log(data)
                    setTopics(data);

                    // Inicializar o estado showExercises para cada tópico
                    const initialShowExercises = {};
                    data.forEach(topic => {
                        initialShowExercises[topic.id] = false; // Define o estado inicial para cada tópico como true
                    });
                    setShowExercises(initialShowExercises);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchData();
    }, []);


    const toggleShowExercises = (topicId) => {
        setShowExercises(prevState => ({
            ...prevState,
            [topicId]: !prevState[topicId]
        }));
    };

    return (
        <>
            {topics && (
                topics.map((topic, index) => (
                    <div className="topic" key={index}>
                        <div className="topic-info">
                            <h1>{topic.title}</h1>
                            <button onClick={() => toggleShowExercises(topic.id)}>Alterar exibição</button>
                        </div>
                        <div className={showExercises[topic.id] ? "exe-wrapper" : "exe-wrapper hidden-exercise"}>
                            <ExerciseCard topic={topic.id} />
                        </div>
                    </div>
                ))
            )}
        </>
    )
}

export default Topic;