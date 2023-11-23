import { useState } from "react";
import { useEffect } from "react";
import './ExerciseCard.css';
import { Link } from "react-router-dom";


function ExerciseCard(props) {
    const [exercises, setExercises] = useState();
    const topicID = props.topic;
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://26.30.244.54:8080/topic/exercises/${topicID}`, {
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
                    setExercises(data);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchData();
    }, [])

    return (
        <>
            {exercises && (
                <>
                    {
                        exercises.map((exercise, index) => (
                            <div key={index} className="exercise-wrapper">
                                <div className="exe-info">
                                    <h1>{exercise.title}</h1>
                                    <p>{exercise.question}</p>
                                </div>
                                <Link className="exercise-btn"  to={`/teste/${exercise.id}`}>Resolver</Link>
                            </div>
                        ))
                    }
                </>
            )}
        </>
    );
}

export default ExerciseCard;