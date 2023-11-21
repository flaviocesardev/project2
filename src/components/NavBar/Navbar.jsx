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
                    <div className="nav-button" onClick={logoutUser}>Deslogar</div>
                    <Link className="nav-button" to="/">Home</Link>
                    <Link className="nav-button" to="/profile">Profile</Link>
                    <Link className="nav-button" to="/teste">Dashboard</Link>
                </>
            ) : (
                <>
                    <Link className="nav-button" to="/login">Login</Link>
                    <Link className="nav-button" to="/register">Register</Link>
                </>
            )}
        </nav>
    )
}

export default Navbar