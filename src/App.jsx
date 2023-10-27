import './App.css'

// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'


// 4 - Navegando em páginas
import Navbar from './components/Navbar'

function App() {
  

  return (    
      <div className="App">
      <Navbar />
      <Outlet />
      <footer className='footer-login'>project2</footer>
      </div>    
  )
}

export default App
