import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import "./Login.css";

const Login = () => {
    const [isConnecting, setIsConnecting] = useState(false);
    const { user, loginUser, logintest , keepLoggedIn,setKeepLoggedIn } = useAuth();
    const navigate = useNavigate();
    const loginForm = useRef(null);
    const spinRef = useRef(null);


    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsConnecting(true);
        spinRef.current.classList.add("spin-animation");
        
        setTimeout(() => {
            const username = loginForm.current.user.value;
            const password = loginForm.current.password.value;
            const userInfo = { username, password };
            loginUser(userInfo);
            setIsConnecting(false);
            spinRef.current.classList.remove("spin-animation");
        }, 100);
    }

    const toggleKeepLogedIn = () => {
        setKeepLoggedIn(prev => !prev)
    }

    useEffect(()=>{
        localStorage.setItem("STFC_KEEP",keepLoggedIn);
    },[keepLoggedIn])

    return (
        <div className="form-wrapper">
            <div className="spin-wrapper">
                <div ref={spinRef} className="spin-rectangle"></div>
                <form ref={loginForm} onSubmit={handleSubmit}>
                    <h1 style={{ color: "#ffffff", textAlign: "center", marginTop: "1.5rem" }}>Login</h1>
                    <div className="input-wrapper">
                        <label style={{ color: "#ffffff" }} htmlFor="user">Usuário</label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                        />
                    </div>

                    <div className="input-wrapper">
                        <label style={{ color: "#ffffff" }} htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                        />
                    </div>
                    <input
                        className="button-login"
                        type="submit" value="Entrar"
                        disabled={isConnecting}
                    />
                    <div className="checkbox-wrapper">
                        <input
                            type="checkbox"
                            id="keep-loggedIn"
                            onChange={toggleKeepLogedIn}
                            checked={keepLoggedIn}
                        />
                        <label htmlFor="keep-loggedIn">Manter Conectado</label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login