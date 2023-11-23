import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';

import Login from './routes/Login';
import Register from './routes/Register';
import InitialPage from './routes/InitialPage';
import CodeView from './routes/CodeView';
import Error404 from './routes/Error404';
import Navbar from './components/NavBar/Navbar';
import Exercises from './routes/Exercises';


import PrivateRoutes from './utils/PrivateRoutes';
import CreateExercise from './routes/CreateExercise';

function App() {

  return (
    <div className="App">
      <Router >
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/teste/:exerciseID" element={<CodeView />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path='/create' element={<CreateExercise />} />
            </Route>
            <Route path="/" element={<InitialPage />} />
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
