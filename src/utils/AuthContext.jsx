import { useEffect, useState, createContext, useContext } from "react"
import { json, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(JSON.parse(localStorage.getItem("STFC_KEEP")) || false);

    useEffect(() => {
        checkUserStatus()
    }, [])


    const loginUser = async (userInfo) => {
        setLoading(true);
        try {
            const response = await fetch('http://26.30.244.54:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "login": "login1",
                    "password": "senha1"
                }),
            });

            let data = await response.json()
            console.log(data)
            if (data.token) {
                setUser(true)
                localStorage.setItem("auth-test", data.token);
                console.log("logado", localStorage.getItem("auth-test"))
                navigate('/exercises')
            } else {
                console.log("User Not Found!!!")
            }

        } catch (error) {
            console.log(error);
        }

        setLoading(false);

    };
    const logoutUser = () => {
        localStorage.removeItem("auth-test");
        setUser(false);
        navigate('/');
    };

    const registerUser = () => { };
    const checkUserStatus = async () => {
        if (keepLoggedIn) {
            const token = localStorage.getItem("auth-test");
            if (token) {
                const response = await fetch('http://26.30.244.54:8080/auth/verify', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    },
                });
                if (response.status != 403) {
                    let data = await response.json()

                    if (data.status) {
                        setUser(true);
                    }
                } else {
                    localStorage.setItem('STFC_KEEP', false)
                    logoutUser();
                }
            }
        }


        setLoading(false)
    };


    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus,
        keepLoggedIn,
        setKeepLoggedIn,
    }

    return (

        <AuthContext.Provider value={contextData}>
            {loading ? <p>Carregando...</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext;