import React from 'react'
import "../routes/Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
    <div className='div-all-home'>

        <div className='div-h1-home'>
        <h1 className='h1-home'>Seja bem-vindo(a), "nome do indivíduo"</h1>
        </div>

        <div className='div-p-home'>
        <p className='p-home'>Espero que curta nosso site, otaro</p>
        </div>        
        
        <div className='div-button-home'>
            <Link to="/teste">
            <button className='button-home' >Iniciar</button>
            </Link>
        </div>
    </div>
    )
}

export default Home