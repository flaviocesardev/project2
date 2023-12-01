import { Link } from "react-router-dom"
import { useAuth } from "../../utils/AuthContext"
import './Navbar.css';

const Navbar = () => {
    const { user } = useAuth();
    const { logoutUser } = useAuth();

    return (
        <nav>
            {user ? (
                <>
                    <div className="logo-wrapper">
                        <h1>&lt;/&gt; Antares Codiguin</h1>
                        <div className="nav-button" onClick={logoutUser}>Deslogar</div>
                    </div>
                    <div className="links-wrapper">
                        <Link className="nav-button" to="/home">Home</Link>
                        <Link className="nav-button" to="/exercises">Exercises</Link>
                        <Link className="nav-button" to="/create">Create</Link>
                        <Link className="nav-button" to="/copy">Copy Test</Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="logo-wrapper">
                        <h1>&lt;/&gt; Antares Codiguin</h1>
                    </div>
                    <div className="links-wrapper">
                        <Link className="nav-button" to="/register">Register</Link>
                        <Link className="nav-button" id="login-btn" to="/login">Login</Link>
                    </div>
                </>
            )}
        </nav>
    )
}

export default Navbar