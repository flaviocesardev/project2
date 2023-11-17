import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';

import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';
import CodeView from './routes/CodeView';
import Error404 from './routes/Error404';
import Navbar from './components/NavBar/Navbar';


import PrivateRoutes from './utils/PrivateRoutes';

function App() {

  return (
    <div className="App">
      <Router >
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/teste" element={<CodeView />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AuthProvider>

      </Router>
    </div >
  )
}

export default App
