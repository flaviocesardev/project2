import './Error404.css';
import { Link } from 'react-router-dom';

function Error404() {

    
    return (
        <div className="error-wrapper">
            <h1 style={{ color: "#f6b150", fontSize: "7rem" }}>404</h1>
            <h1 style={{ color: "#fff" }}>Página não encontrada</h1>
            <p>Você foi longe demais</p>
            <p>Não existe mais nada a frente...</p>
            
            <Link className='back' to={'/'}>Voltar</Link>
        </div>
    )


}

export default Error404;