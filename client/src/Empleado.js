import { useState } from 'react';
import './App.css';
import NavButton from './components/UI/NavButton';

import AgregarEmpleado from './EmpleadoDashboard/Agregar';
import Eliminados from './EmpleadoDashboard/Eliminar';

import { useNavigate } from 'react-router-dom';

function Empleado() {
    const [loadedModule, setLoadedModule] = useState([1, 0, 0])

    const navigate = useNavigate();

    const handleNavClick = (index) => {
        const resetModules = [0, 0, 0]
        resetModules[index] = 1
        setLoadedModule(resetModules)
    }

    const handleSalirClick = () => {
        navigate('/');
    };

    return (
        <div className="h-100 w-100 d-flex">
            <div className="d-flex align-items-center justify-content-center flex-column sideBar p-2 text-dark" style={{ width: '220px' }}>
                <div className='container text-center'>
                    <h4>MONBA</h4>
                </div>
                <div className="mb-auto text-dark">
                    <ul className="nav nav-pills flex-column mb-auto py-4">
                        <NavButton title="Agregar Empleados" activeSection={loadedModule[0] === 1 ? true : false} onClick={() => handleNavClick(0)} />
                        <NavButton title="Empleados Eliminados" activeSection={loadedModule[1] === 1 ? true : false} onClick={() => handleNavClick(1)} />
                        <NavButton title="Configurar Perfil" activeSection={loadedModule[2] === 1 ? true : false} onClick={() => handleNavClick(2)} />
                    </ul>
                </div>
                <div className='container-fluid'>
                    <button className='btn btn-outline-dark w-100' onClick={handleSalirClick}>Salir</button>
                </div>
            </div>
            <div className="flex-grow-1 overflow-y-scroll position-relative element">
                { loadedModule[0] ? <AgregarEmpleado /> : null }
                { loadedModule[1] ? <Eliminados /> : null }
            </div>
        </div>
    )
}

export default Empleado;