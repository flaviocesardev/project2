import { useState, useEffect } from "react";
import { useAuth } from "../utils/AuthContext";

function Exercises() {
    const [dados, setDados] = useState(null);
    const {logoutUser} = useAuth()
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://26.30.244.54:8080/exercise/1', {
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
                    setDados(data);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchData();
            
    }, []);

    return (
        <>
            <h1>Exercícios:</h1>
            {dados && (
                <div>
                    {dados.map((exercise, index) => (
                        <div key={index} className="exercise-wrapper">
                            <h1>{exercise.title}</h1>
                            <p>{exercise.question}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Exercises