import "../components/Style.css"

const Login = () => {
    return (
    <div >
        <h1 >Entrar</h1>
        <form>
            <div>
                <label htmlFor="user">Usuário:</label>
                <input 
                type="text"
                id="user"
                name="user"
                required
                />

                <label htmlFor="password">Senha:</label>
                <input 
                type="password"
                id="password"
                name="password"
                required
                />
            </div>
            <input 
            className='button-login' type="submit" value="Entrar"/>
        </form>
    </div>
    )
}

export default Login