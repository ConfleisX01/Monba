import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EmpleadoInfo() {
    const location = useLocation();
    const { userData } = location.state || {};

    const navigate = useNavigate()

    const [data, setData] = useState(null);

    useEffect(() => {
        if (userData && userData[0] && userData[0].id_usuario) {
            const id = userData[0].id_usuario;

            const getUserData = () => {
                axios.get('http://localhost:3001/getEmpleado', {
                    params: { id }
                })
                    .then((response) => {
                        console.log(response.data);
                        setData(response.data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            };

            getUserData();
        }
    }, [userData]);

    if (!data || !data[0]) {
        return <div>Cargando...</div>;
    }

    return (
        <div className='container-fluid row py-2 h-100 overflow-y-scroll'>
            <div className='col-md-4 d-flex justify-content-center flex-column text-center align-items-center'>
                <img className='img-responsive rounded' src={data[0].foto || 'default-image-url.jpg'} style={{ width: '250px', height: '250px' }} alt="Foto"></img>
                <button className='btn btn-outline-light btn-md w-50 my-5' onClick={() => {
                    navigate('/')
                }}>Salir</button>
            </div>
            <div className='col-md-8 row'>
                <div className='col-md-4'>
                    <p className='fs-5'>Nombre: <strong>{data[0].nombre_persona || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Apellido Paterno: <strong>{data[0].a_paterno || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Apellido Materno: <strong>{data[0].a_materno || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Género: <strong>{data[0].genero || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Fecha de nacimiento: <strong>{data[0].fecha_nacimiento || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>RFC: <strong>{data[0].rfc || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>CURP: <strong>{data[0].curp || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Domicilio: <strong>{data[0].domicilio || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Código Postal: <strong>{data[0].codigo_postal || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Ciudad: <strong>{data[0].ciudad || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Estado: <strong>{data[0].estado || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Teléfono: <strong>{data[0].telefono || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Número Licencia: <strong>{data[0].numero_licencia || 'No hay contenido'}</strong></p>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Tipo Licencia: <strong>{data[0].tipo_licencia || 'No hay contenido'}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default EmpleadoInfo;
