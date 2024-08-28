import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import { useState, useEffect, act } from 'react'
import './App.css';
import Empleado from './Empleado';
import Login from './Login';

function App() {
  const [activeSection, setSection] = useState('Login')

  const renderSection = () => {
    if (activeSection === 'Login') return <Login />

    if (activeSection === 'Empleado') return <Empleado />
  }
  // const [datosUsuarios, setUsuarios] = useState([])

  // const getAllUsuarios = () => {
  //   Axios.get('http://localhost:3001/getAllUsuarios').then((response) => {
  //     setUsuarios(response.data)
  //     console.log(response)
  //   })
  // }

  // useEffect(() => {
  //   getAllUsuarios()
  // }, [0])

  return (
    <div className="bg-blue text-light" style={{height: '100vh'}}>
      {renderSection()}
    </div>
  );
}

export default App;