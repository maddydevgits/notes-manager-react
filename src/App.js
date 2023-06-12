import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './Pages';
import Register from './Pages/register';
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';
import Insertnotes from './Pages/insertnotes';
import Viewnotes from './Pages/viewnotes';

function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/insertnotes' element={<Insertnotes />} />
                <Route path='/viewnotes' element={<Viewnotes />} /> 
                
            </Routes>
        </Router>
    );
}
 
export default App;
