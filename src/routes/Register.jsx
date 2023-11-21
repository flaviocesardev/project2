import React from 'react'

const Register = () => {
    return (
        <div>
            <form>
                <h1>Registrar</h1>
                <div className='content-box'>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    />

                    <label htmlFor="email">E-mail:</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    required
                    />

                    <label htmlFor="matricula">Matrícula</label>
                    <input 
                    type="text"
                    id="matricula" 
                    name="matricula"
                    required
                    />

                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    required
                    />
                </div>
                <input className='button-register' type="submit" value="Entrar"/>
            </form>
        </div>
        )
}

export default Register