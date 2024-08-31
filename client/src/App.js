import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import { useState, useEffect, act } from 'react'
import './App.css';
import Login from './Login';
import Manifiestos from './Manifiestos';
import Empleado from './Empleado';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="bg-blue text-light" style={{ height: '100vh' }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/empleado' element={<Empleado />} />
          <Route path='/manifiestos' element={<Manifiestos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;