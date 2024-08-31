import { useState } from 'react';
import './App.css';

function Empleado() {
    const [toggleForm, setToggleForm] = useState(false)
    const [formActive, setFormActive] = useState(false)

    function toggleFormVisibility() {
        setFormActive(prevAction => !prevAction)
    }

    return (
        <div className="h-100 w-100 d-flex">
            <div className="d-flex align-items-center justify-content-center flex-column sideBar p-2 text-dark" style={{ width: '180px' }}>
                <div className='container text-center'>
                    <h4>MONBA</h4>
                </div>
                <div className="mb-auto">
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item d-flex align-middle my-3">
                            <span className='mx-1 fs-6'>Agregar Empleado</span>
                        </li>
                        <li className="nav-item d-flex align-middle my-3">
                            <span className='mx-1 fs-6'>Eliminar Empleado</span>
                        </li>
                        <li className="nav-item d-flex align-middle my-3">
                            <span className='mx-1 fs-6'>Configurar Perfil</span>
                        </li>
                    </ul>
                </div>
                <div className='container-fluid'>
                    <button className='btn btn-outline-dark w-100'>Salir</button>
                </div>
            </div>
            <div className="flex-grow-1 overflow-y-scroll position-relative element">
                <div className={`h-100 p-2 bg-white position-absolute end-0 text-dark top-0 overflow-y-scroll z-3 shadow border element ${!formActive ? 'd-none' : 'd-block'}`} style={{ width: '650px' }}>
                    <div className='container-fluid border-bottom py-2'>
                        <h4>Formulario Empleados</h4>
                    </div>
                    <div className='container-fluid p-2 border my-2'>
                        <div className='container-fluid p-1 text-center bg-dark text-white rounded'>
                            <h4>Datos Personales:</h4>
                        </div>
                        <div className='container-fluid p-1 m-0 row'>
                            <div className='col-md-12'>
                                <label className='form-label'>Foto:</label>
                                <input className='form-control' type='file' accept='.jpg, .png'/>
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>Nombre:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>Apellido Paterno:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>Apellido Materno:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-6'>
                                <label className='form-label'>Genero:</label>
                                <select className='form-select'>
                                    <option>Selecciona</option>
                                    <option>Hombre</option>
                                    <option>Mujer</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <label className='form-label'>Fecha Nacimiento:</label>
                                <input type='date' className='form-control' />
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>RFC:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>CURP:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>Domicilio:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-3'>
                                <label className='form-label'>Codigo Postal:</label>
                                <input className='form-control' type='number' />
                            </div>
                            <div className='col-md-3'>
                                <label className='form-label'>Ciudad:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-3'>
                                <label className='form-label'>Estado:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-3'>
                                <label className='form-label'>Télefono:</label>
                                <input className='form-control' type='number' />
                            </div>
                        </div>
                        <div className='container-fluid p-1 my-2 text-center bg-dark text-white rounded'>
                            <h4>Datos de Usuario:</h4>
                        </div>
                        <div className='container-fluid p-1 m-0 row'>
                            <div className='col-md-4'>
                                <label className='form-label'>Nombre:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>Apellido Paterno:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>Genero:</label>
                                <select className='form-select'>
                                    <option>Selecciona</option>
                                    <option>Administrador</option>
                                    <option>Empleado</option>
                                    <option>Operador</option>
                                </select>
                            </div>
                        </div>
                        <div className='container-fluid p-1 my-2 text-center bg-dark text-white rounded'>
                            <h4>Datos de Empleado:</h4>
                        </div>
                        <div className='container-fluid p-1 m-0 row'>
                            <div className='col-md-3'>
                                <label className='form-label'>Código:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-3'>
                                <label className='form-label'>Fecha Ingreso:</label>
                                <input className='form-control' type='date' />
                            </div>
                            <div className='col-md-3'>
                                <label className='form-label'>Puesto:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-3'>
                                <label className='form-label'>Correo:</label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>Estatus:</label>
                                <select className='form-select'>
                                    <option>Selecciona</option>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                </select>
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>Número Placa:</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-md-4'>
                                <label className='form-label'>Tipo Vehículo:</label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-md-12'>
                                <label className='form-label'>Comentarios:</label>
                                <input className='form-control' type='email' />
                            </div>
                        </div>
                        <div className='container-fluid text-end'>
                            <button className='btn btn-info'>Guardar Registro</button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-2 bg-success text-center">
                    <h2>MÓDULO EMPLEADOS</h2>
                </div>
                <div className='container my-4'>
                    <div className='container-fluid text-center'>
                        <button className='btn btn-outline-success btn-md' onClick={() => toggleFormVisibility()}>Nuevo Registro</button>
                    </div>
                    <table className="table table-striped-rows table-hover caption-top">
                        <caption className='fs-3 fw-bold text-white'>Catalogo de empleados</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido Paterno</th>
                                <th scope="col">Apellido Materno</th>
                                <th scope="col">Puesto</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='align-middle'>
                            <tr>
                                <th scope="row">1</th>
                                <td>Juan Pablo</td>
                                <td>Perez</td>
                                <td>Fernandez</td>
                                <td>Desarrollador</td>
                                <td>
                                    <div className='btn-group'>
                                        <button className='btn btn-warning'>Modificar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Empleado;