import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
    return (
    <div className='home-wrapper'>
        <h1>PIPIPI POPOPO</h1>
        <h2>COPIA CÓDIGO AI PRA TU VER MENO</h2>
        <Link id='register-btn' to="/register">Registrar</Link>
        <img id='js-icon' src="/js-icon.svg" alt="js-icon" />
    </div>
    )
}

export default Home