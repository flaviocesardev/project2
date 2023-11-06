import { useEffect, useState, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        checkUserStatus()
    }, [])

    const loginUser = async (userInfo) => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3050/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userLogin: userInfo.username, userPassword: userInfo.password }),
            });

            let data = await response.json()

            if (data.auth) {
                setUser(data)
                localStorage.setItem("auth-test", data.token);
                console.log("logado", localStorage.getItem("auth-test"))
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
        const token = localStorage.getItem("auth-test");

        if (token) {
            const response = await fetch('http://localhost:3050/verify', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
            });
            let data = await response.json()

            if (data.auth) {
                setUser(true);
                console.log(data.user);
            }
        }

        setLoading(false)
    };


    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus

    }

    return (

        <AuthContext.Provider value={contextData}>
            {loading ? <p>Carregando...</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext;