import React from 'react'
import "../routes/Home.css"
import { Link } from 'react-router-dom'
import { useReducer } from 'react';


const Home = () => {
  return (
    <div className='all-div-home'>

      <div className='div-left'>
        <h1 className='h1-div-left'>Aluno: <a></a>Ulalau teste</h1>
        <p className='p-div-left'>Email: aushd@discente.ifpe.edu.br</p>
        <p className='p-div-left'>matrícula: 20202020</p>
      </div>

      <div className='div-right'>
        <h1>Questões da semana:</h1>
        <p className='p-div-right'>Aqui você tem acesso a todas as questões da semana...</p>
        <Link to="/teste" className='link-div'><button className='button-test'>Ir</button></Link> 
        {/* Alterar a rota para a das questões */}
      </div>

      <div className='div-full'>
        <h1>Dashboard:</h1>
        <p className='p-div-full'>Aqui tu vai pra o Dashboard...</p>
        <Link to="/teste" className='link-div'>  <button className='button-test'>Ir</button> </Link>
        {/* Alterar a rota para a das questões */}
      </div>

    </div>
  );
};

export default Home;



    
    // <div className='div-all-home'>

    //     <div className='div-h1-home'>
    //     <h1 className='h1-home'>Seja bem-vindo(a), "nome do indivíduo"</h1>
    //     </div>

    //     <div className='div-p-home'>
    //     <p className='p-home'>Espero que curta nosso site, otaro</p>
    //     </div>        
        
    //     <div className='div-button-home'>
    //         <Link to="/teste">
    //         <button className='button-home' >Iniciar</button>
    //         </Link>
    //     </div>
    // </div>