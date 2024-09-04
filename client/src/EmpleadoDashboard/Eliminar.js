import { useState, useEffect } from "react"
import '../App.css';
import Axios from 'axios';

export default function Eliminados() {
    const [allData, setAllData] = useState([])

    const getData = () => {
        Axios.get("http://localhost:3001/getAllEmpleadosEliminados").then((response) => {
            setAllData(response.data)
        })
    }

    useEffect(() => {
        getData();
    }, []);

    const activarEmpleado = (id) => {
        Axios.put(`http://localhost:3001/activarEmpleado`, [id]).then(() => {
            getData()
            alert("Empleado activado con exito")
        })
    }

    return (
        <>
            <div className="container-fluid p-2 bg-success text-center">
                <h2>MÓDULO EMPLEADOS ELIMINADOS</h2>
            </div>
            <div className='container my-4'>
                <table className="table table-striped-rows table-hover caption-top">
                    <caption className='fs-3 fw-bold text-white'>Catalogo de empleados</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Apellido Materno</th>
                            <th scope="col">Puesto</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='align-middle'>
                        {
                            allData.length > 0
                                ? allData.map((e) => {
                                    console.log(e)
                                    return (
                                        <tr key={e.id_empleado}>
                                            <th scope='col'>{e.id_empleado}</th>
                                            <th scope='col'>
                                                <img className='rounded-circle' style={{ width: '45px', height: '45px' }} src={e.foto} alt="Foto" />
                                            </th>
                                            <th scope='col'>{e.nombre_persona}</th>
                                            <th scope='col'>{e.a_paterno}</th>
                                            <th scope='col'>{e.a_materno}</th>
                                            <th scope='col'>{e.puesto}</th>
                                            <th scope='col'>
                                                <div className='btn-group'>
                                                    <button type="button" className="btn btn-outline-success" onClick={() => activarEmpleado(e.id_empleado)}>Activar Empleado</button>
                                                </div>
                                            </th>
                                        </tr>
                                    )
                                })
                                : null
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}