import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const navigate = useNavigate()

    const verificarLogin = (route) => {
        /// Verificar si las credenciales son correctas con su respectivo modulo
        console.log(`Nombre de usuario: ${userName}, contrasenia: ${userPassword}. La ruta es: ${route}`)

        navigate(route)
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
                        onClick={() => verificarLogin('/manifestos')}>INGRESAR</button>
                </div>
                <div className='p-4 bg-black rounded shadow-lg text-center mx-2' style={{ width: '350px' }}>
                    <h5>MONBA-EMPLEADOS</h5>
                    <input className='form-control my-4' placeholder='Usuario'
                        onChange={(e) => setUserName(e.target.value)} />
                    <input type="password" className='form-control my-4' placeholder='Contraseña'
                        onChange={(e) => setUserPassword(e.target.value)} />
                    <button className='btn btn-outline-light'
                        onClick={() => verificarLogin('/empleado')}>INGRESAR</button>
                </div>
            </div>
        </div>
    )
}

export default Login