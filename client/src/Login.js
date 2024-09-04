import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Login() {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const navigate = useNavigate()

    const loginUser = (route) => {
        axios.get('http://localhost:3001/login', {
            params: {
                userName: userName,
                userPassword: userPassword
            }
        })
        .then((response) => {
            const userData = response.data
            console.log(userData)

            if (userData[0].rol === 'ADM') {
                // Ir a administrador
                navigate('/empleado')
            } else {
                // Ir a mostrar informacion
                navigate('/empleado-info', { state: { userData } })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="container-fluid h-100 d-flex align-items-center justify-content-center flex-column">
            <h1 className='p-3 bg-success rounded'>RECOLECTORA MONBA</h1>
            <div className='container d-flex align-items-center justify-content-center'>
                <div className='p-4 my-4 bg-black rounded shadow-lg text-center mx-2' style={{ width: '350px' }}>
                    <h5>MONBA-MANIFIESTOS</h5>
                    <input className='form-control my-4' placeholder='Usuario'
                        onChange={(e) => setUserName(e.target.value)} />
                    <input type="password" className='form-control my-4' placeholder='Contraseña'
                        onChange={(e) => setUserPassword(e.target.value)} />
                    <button className='btn btn-outline-light'
                        onClick={() => loginUser('/manifestos')}>INGRESAR</button>
                </div>

                <div className='p-4 bg-black rounded shadow-lg text-center mx-2' style={{ width: '350px' }}>
                    <h5>MONBA-EMPLEADOS</h5>
                    <input className='form-control my-4' placeholder='Usuario'
                        onChange={(e) => setUserName(e.target.value)} />
                    <input type="password" className='form-control my-4' placeholder='Contraseña'
                        onChange={(e) => setUserPassword(e.target.value)} />
                    <button className='btn btn-outline-light'
                        onClick={() => loginUser('/empleado')}>INGRESAR</button>
                </div>
            </div>
        </div>
    )
}

export default Login