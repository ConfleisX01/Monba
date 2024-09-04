import { useEffect, useState } from 'react';
import EmpleadoClass from '../classes/EmpleadoClass';
import DocumentosClass from '../classes/DocumentosClass';
import PersonaClass from '../classes/PersonaClass';
import UsuarioClass from '../classes/UsuarioClass';
import '../App.css';
import Axios from 'axios';

function AgregarEmpleado() {
    const [allData, setAllData] = useState([])
    const [formActive, setFormActive] = useState(false)
    const [peticion, setPeticion] = useState('Creando')

    /// 34 Parametros de entrada para registrar un empleado completo
    const [idEmpleadoAct, setIdEmpleadoAct] = useState(0)

    const [foto, setFoto] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [genero, setGenero] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [rfc, setRfc] = useState('');
    const [curp, setCurp] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [estado, setEstado] = useState('');
    const [telefono, setTelefono] = useState('');
    const [numeroLicencia, setNumeroLicencia] = useState('')
    const [tipoLicencia, setTipoLicencia] = useState('')
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [rol, setRol] = useState('');
    const [codigoEmpleado, setCodigoEmpleado] = useState('');
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [puesto, setPuesto] = useState('');
    const [correo, setCorreo] = useState('');
    const [estatus, setEstatus] = useState(1);
    const [numeroPlaca, setNumeroPlaca] = useState('');
    const [tipoVehiculo, setTipoVehiculo] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [nombreExpediente, setNombreExpediente] = useState('');
    const [expediente, setExpediente] = useState(null);
    const [nombreNomina, setNombreNomina] = useState('');
    const [nomina, setNomina] = useState(null);
    const [nombreAlta, setNombreAlta] = useState('');
    const [alta, setAlta] = useState(null);
    const [nombreVacaciones, setNombreVacaciones] = useState('');
    const [vacaciones, setVacaciones] = useState(null);


    function toggleFormVisibility() {
        setFormActive(prevAction => !prevAction)
    }

    const getData = () => {
        Axios.get("http://localhost:3001/getAllEmpleados").then((response) => {
            setAllData(response.data)
        })
    }

    useEffect(() => {
        getData();
    }, []);

    const crearEmpleado = () => {
        const personaObject = new PersonaClass(
            foto, nombre, apellidoPaterno, apellidoMaterno, genero, fechaNacimiento,
            rfc, curp, domicilio, codigoPostal, ciudad, estado, telefono, numeroLicencia, tipoLicencia
        );

        const usuarioObject = new UsuarioClass(nombreUsuario, contrasenia, rol);

        const empleadoObject = new EmpleadoClass(
            codigoEmpleado, fechaIngreso, puesto, correo, estatus,
            numeroPlaca, tipoVehiculo, comentarios
        );

        const documentosObject = new DocumentosClass(
            nombreExpediente, expediente, nombreNomina, nomina,
            nombreAlta, alta, nombreVacaciones, vacaciones
        );

        const empleadoData = {
            ...personaObject,
            ...usuarioObject,
            ...documentosObject,
            ...empleadoObject
        };

        Axios.post('http://localhost:3001/saveEmpleado', empleadoData)
            .then(response => {
                getData()
            })
            .catch(error => {
                console.error('Error al insertar el empleado:', error);
            });
    };


    const actualizarEmpleado = (val) => {
        setPeticion(prevValue => 'Actualizando')

        setIdEmpleadoAct(val.id_empleado)

        setFoto(val.foto)
        setNombre(val.nombre_persona)
        setApellidoPaterno(val.a_paterno)
        setApellidoMaterno(val.a_materno)
        setGenero(val.genero)
        setFechaNacimiento(handleDateChange(val.fecha_nacimiento))
        setRfc(val.rfc)
        setCurp(val.curp)
        setDomicilio(val.domicilio)
        setCodigoPostal(val.codigo_postal)
        setCiudad(val.ciudad)
        setEstado(val.estado)
        setTelefono(val.telefono)
        setTipoLicencia(val.tipo_licencia)
        setNumeroLicencia(val.numero_licencia)

        setNombreUsuario(val.nombre_usuario)
        setContrasenia(val.contrasenia)
        setRol(val.rol)

        setCodigoEmpleado(val.codigo)
        setFechaIngreso(handleDateChange(val.fecha_ingreso))
        setPuesto(val.puesto)
        setCorreo(val.correo_electronico)
        setEstado(val.estatus)
        setNumeroPlaca(val.num_placa)
        setTipoVehiculo(val.tipo_vehiculo)
        setComentarios(val.comentario)

        setNombreExpediente(val.nombre_expediente)
        setExpediente(val.expediente)
        setNombreNomina(val.nombre_nomina)
        setNomina(val.pdf_nomina)
        setNombreAlta(val.nombre_alta)
        setAlta(val.pdf_alta)
        setNombreVacaciones(val.nombre_formato_vacaciones)
        setVacaciones(val.pdf_formato_vacaciones)

        toggleFormVisibility()
    }

    const sendDataToUpdate = () => {
        const idEmpleado = idEmpleadoAct;

        const personaObject = new PersonaClass(
            foto, nombre, apellidoPaterno, apellidoMaterno, genero, fechaNacimiento,
            rfc, curp, domicilio, codigoPostal, ciudad, estado, telefono, numeroLicencia, tipoLicencia
        );

        const usuarioObject = new UsuarioClass(nombreUsuario, contrasenia, rol);

        const empleadoObject = new EmpleadoClass(
            codigoEmpleado, fechaIngreso, puesto, correo, estatus,
            numeroPlaca, tipoVehiculo, comentarios
        );

        const documentosObject = new DocumentosClass(
            nombreExpediente, expediente, nombreNomina, nomina,
            nombreAlta, alta, nombreVacaciones, vacaciones
        );

        const empleadoData = {
            idEmpleado,
            foto: personaObject.foto,
            nombre: personaObject.nombre,
            apellidoPaterno: personaObject.apellidoPaterno,
            apellidoMaterno: personaObject.apellidoMaterno,
            genero: personaObject.genero,
            fechaNacimiento: personaObject.fechaNacimiento,
            rfc: personaObject.rfc,
            curp: personaObject.curp,
            domicilio: personaObject.domicilio,
            codigoPostal: personaObject.codigoPostal,
            ciudad: personaObject.ciudad,
            estado: personaObject.estado,
            telefono: personaObject.telefono,
            numeroLicencia: personaObject.numeroLicencia,
            tipoLicencia: personaObject.tipoLicencia,
            nombreUsuario: usuarioObject.nombreUsuario,
            contrasenia: usuarioObject.contrasenia,
            rol: usuarioObject.rol,
            codigoEmpleado: empleadoObject.codigoEmpleado,
            fechaIngreso: empleadoObject.fechaIngreso,
            puesto: empleadoObject.puesto,
            correo: empleadoObject.correo,
            estatus: empleadoObject.estatus,
            numeroPlaca: empleadoObject.numeroPlaca,
            tipoVehiculo: empleadoObject.tipoVehiculo,
            comentario: empleadoObject.comentarios,
            nombreExpediente: documentosObject.nombreExpediente,
            expediente: documentosObject.expediente,
            nombreNomina: documentosObject.nombreNomina,
            nomina: documentosObject.nomina,
            nombreAlta: documentosObject.nombreAlta,
            alta: documentosObject.alta,
            nombreVacaciones: documentosObject.nombreVacaciones,
            vacaciones: documentosObject.vacaciones
        };

        Axios.put('http://localhost:3001/actualizarEmpleado', empleadoData)
            .then(response => {
                console.log('Empleado actualizado exitosamente:', response.data);
            })
            .catch(error => {
                console.error('Error al actualizar el empleado:', error);
            });
    };

    const handleDateChange = (val) => {
        const fechaISO = val; // Ejemplo: 2024-09-03T06:00:00.000Z
        const fechaFormateada = fechaISO.toString().split('T')[0]; // Convierte a 'YYYY-MM-DD'

        return fechaFormateada
    };

    const eliminarEmpleado = (id) => {
        Axios.put(`http://localhost:3001/eliminarEmpleado`, [id]).then(() => {
            getData()
            alert("Empleado Eliminado con exito")
        })
    };

    const limpiarFormulario = () => {
        setFoto('');
        setNombre('');
        setApellidoPaterno('');
        setApellidoMaterno('');
        setGenero('');
        setFechaNacimiento('');
        setRfc('');
        setCurp('');
        setDomicilio('');
        setCodigoPostal('');
        setCiudad('');
        setEstado('');
        setTelefono('');
        setNumeroLicencia('')
        setTipoLicencia('')
        setNombreUsuario('');
        setContrasenia('');
        setRol('');
        setCodigoEmpleado('');
        setFechaIngreso('');
        setPuesto('');
        setCorreo('');
        setEstatus(1);
        setNumeroPlaca('');
        setTipoVehiculo('');
        setComentarios('');
        setNombreExpediente('');
        setExpediente(null);
        setNombreNomina('');
        setNomina(null);
        setNombreAlta('');
        setAlta(null);
        setNombreVacaciones('');
        setVacaciones(null);
    }
    return (
        <>
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
                            <input className='form-control' type='file' accept='.jpg, .png' disabled={peticion === 'Creando' ? false : true} onChange={(e) => {
                                const file = e.target.files[0]
                                if (file) {
                                    const Reader = new FileReader()
                                    Reader.onload = () => {
                                        const string = Reader.result
                                        setFoto(string)
                                    }
                                    Reader.readAsDataURL(file)
                                }
                            }} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>Nombre:</label>
                            <input className='form-control' onChange={(e) => {
                                setNombre(e.target.value)
                            }} value={nombre} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>Apellido Paterno:</label>
                            <input className='form-control' onChange={(e) => {
                                setApellidoPaterno(e.target.value)
                            }} value={apellidoPaterno} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>Apellido Materno:</label>
                            <input className='form-control' onChange={(e) => {
                                setApellidoMaterno(e.target.value)
                            }} value={apellidoMaterno} />
                        </div>
                        <div className='col-md-6'>
                            <label className='form-label'>Genero:</label>
                            <select className='form-select' onChange={(e) => setGenero(e.target.value)} value={genero}>
                                <option value="ND">Selecciona</option>
                                <option value="Hombre">Hombre</option>
                                <option value="MUjer">Mujer</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label className='form-label'>Fecha Nacimiento:</label>
                            <input type='date' className='form-control' onChange={(e) => {
                                setFechaNacimiento(e.target.value)
                            }} value={fechaNacimiento} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>RFC:</label>
                            <input className='form-control' onChange={(e) => {
                                setRfc(e.target.value)
                            }} value={rfc} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>CURP:</label>
                            <input className='form-control' onChange={(e) => {
                                setCurp(e.target.value)
                            }} value={curp} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>Domicilio:</label>
                            <input className='form-control' onChange={(e) => {
                                setDomicilio(e.target.value)
                            }} value={domicilio} />
                        </div>
                        <div className='col-md-3'>
                            <label className='form-label'>Codigo Postal:</label>
                            <input className='form-control' onChange={(e) => {
                                setCodigoPostal(e.target.value)
                            }} value={codigoPostal} />
                        </div>
                        <div className='col-md-3'>
                            <label className='form-label'>Ciudad:</label>
                            <input className='form-control' onChange={(e) => {
                                setCiudad(e.target.value)
                            }} value={ciudad} />
                        </div>
                        <div className='col-md-3'>
                            <label className='form-label'>Estado:</label>
                            <input className='form-control' onChange={(e) => {
                                setEstado(e.target.value)
                            }} value={estado} />
                        </div>
                        <div className='col-md-3'>
                            <label className='form-label'>Télefono:</label>
                            <input className='form-control' type='number' onChange={(e) => {
                                setTelefono(e.target.value)
                            }} value={telefono} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>Tipo Licencia:</label>
                            <input className='form-control' onChange={(e) => {
                                setTipoLicencia(e.target.value)
                            }} value={tipoLicencia} />
                        </div>
                        <div className='col-md-8'>
                            <label className='form-label'>Numero de Licencia:</label>
                            <input className='form-control' type='number' onChange={(e) => {
                                setNumeroLicencia(e.target.value)
                            }} value={numeroLicencia} />
                        </div>
                    </div>
                    <div className='container-fluid p-1 my-2 text-center bg-dark text-white rounded'>
                        <h4>Datos de Usuario:</h4>
                    </div>
                    <div className='container-fluid p-1 m-0 row'>
                        <div className='col-md-4'>
                            <label className='form-label'>Nombre Usuario:</label>
                            <input className='form-control' onChange={(e) => {
                                setNombreUsuario(e.target.value)
                            }} value={nombreUsuario} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>Contraseña:</label>
                            <input className='form-control' type='password' onChange={(e) => {
                                setContrasenia(e.target.value)
                            }} value={contrasenia} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>Rol:</label>
                            <select className='form-select' onChange={(e) => {
                                setRol(e.target.value)
                            }} value={rol}>
                                <option value={"EMP"}>Empleado</option>
                                <option value={"ADM"}>Administrador</option>
                                <option value={"OPR"}>Operador</option>
                            </select>
                        </div>
                    </div>
                    <div className='container-fluid p-1 my-2 text-center bg-dark text-white rounded'>
                        <h4>Datos de Empleado:</h4>
                    </div>
                    <div className='container-fluid p-1 m-0 row'>
                        <div className='col-md-3'>
                            <label className='form-label'>Código:</label>
                            <input className='form-control' onChange={(e) => {
                                setCodigoEmpleado(e.target.value)
                            }} value={codigoEmpleado} />
                        </div>
                        <div className='col-md-3'>
                            <label className='form-label'>Fecha Ingreso:</label>
                            <input className='form-control' type='date' onChange={(e) => {
                                setFechaIngreso(e.target.value)
                            }} value={fechaIngreso} />
                        </div>
                        <div className='col-md-3'>
                            <label className='form-label'>Puesto:</label>
                            <input className='form-control' onChange={(e) => {
                                setPuesto(e.target.value)
                            }} value={puesto} />
                        </div>
                        <div className='col-md-3'>
                            <label className='form-label'>Correo:</label>
                            <input className='form-control' type='email' onChange={(e) => {
                                setCorreo(e.target.value)
                            }} value={correo} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>Estatus:</label>
                            <select className='form-select' onChange={(e) => setEstatus(Number(e.target.value))} value={estatus}>
                                <option value={1}>Activo</option>
                                <option value={0}>Inactivo</option>
                            </select>
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>Número Placa:</label>
                            <input className='form-control' onChange={(e) => {
                                setNumeroPlaca(e.target.value)
                            }} value={numeroPlaca} />
                        </div>
                        <div className='col-md-4'>
                            <label className='form-label'>Tipo Vehículo:</label>
                            <input className='form-control' onChange={(e) => {
                                setTipoVehiculo(e.target.value)
                            }} value={tipoVehiculo} />
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label'>Comentarios:</label>
                            <input className='form-control' onChange={(e) => {
                                setComentarios(e.target.value)
                            }} value={comentarios} />
                        </div>
                    </div>
                    <div className='container-fluid p-1 my-2 text-center bg-dark text-white rounded'>
                        <h4>Documentos:</h4>
                    </div>
                    <div className='container-fluid p-1 m-0 row'>
                        <div className='col-md-12 row'>
                            <div className='col-md-6'>
                                <label className='form-label'>Nombre Expediente:</label>
                                <input className='form-control' onChange={(e) => {
                                    setNombreExpediente(e.target.value)
                                }} value={nombreExpediente} />
                            </div>
                            <div className='col-md-6'>
                                <label className='form-label'>Expediente:</label>
                                <input className='form-control' type='file' accept='.pdf' disabled={peticion === 'Creando' ? false : true} onChange={(e) => {
                                    const file = e.target.files[0]

                                    if (file) {
                                        const Reader = new FileReader()
                                        Reader.onload = () => {
                                            const string = Reader.result
                                            setExpediente(string)
                                        }

                                        Reader.readAsDataURL(file)
                                    }
                                }} />
                            </div>
                        </div>
                        <div className='col-md-12 row'>
                            <div className='col-md-6'>
                                <label className='form-label'>Nombre Nomina:</label>
                                <input className='form-control' onChange={(e) => {
                                    setNombreNomina(e.target.value)
                                }} value={nombreNomina} />
                            </div>
                            <div className='col-md-6'>
                                <label className='form-label'>Nomina:</label>
                                <input className='form-control' type='file' accept='.pdf' disabled={peticion === 'Creando' ? false : true} onChange={(e) => {
                                    const file = e.target.files[0]

                                    if (file) {
                                        const Reader = new FileReader()
                                        Reader.onload = () => {
                                            const string = Reader.result
                                            setNomina(string)
                                        }

                                        Reader.readAsDataURL(file)
                                    }
                                }} />
                            </div>
                        </div>
                        <div className='col-md-12 row'>
                            <div className='col-md-6'>
                                <label className='form-label'>Nombre Alta:</label>
                                <input className='form-control' onChange={(e) => {
                                    setNombreAlta(e.target.value)
                                }} value={nombreAlta} />
                            </div>
                            <div className='col-md-6'>
                                <label className='form-label'>Alta:</label>
                                <input className='form-control' type='file' accept='.pdf' disabled={peticion === 'Creando' ? false : true} onChange={(e) => {
                                    const file = e.target.files[0]

                                    if (file) {
                                        const Reader = new FileReader()
                                        Reader.onload = () => {
                                            const string = Reader.result
                                            setAlta(string)
                                        }

                                        Reader.readAsDataURL(file)
                                    }
                                }} />
                            </div>
                        </div>
                        <div className='col-md-12 row'>
                            <div className='col-md-6'>
                                <label className='form-label'>Nombre Formato Vacaciones:</label>
                                <input className='form-control' onChange={(e) => {
                                    setNombreVacaciones(e.target.value)
                                }} value={nombreVacaciones} />
                            </div>
                            <div className='col-md-6'>
                                <label className='form-label'>Formato Vacaciones:</label>
                                <input className='form-control' type='file' accept='.pdf' disabled={peticion === 'Creando' ? false : true} onChange={(e) => {
                                    const file = e.target.files[0]

                                    if (file) {
                                        const Reader = new FileReader()
                                        Reader.onload = () => {
                                            const string = Reader.result
                                            setVacaciones(string)
                                        }

                                        Reader.readAsDataURL(file)
                                    }
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid text-center my-4'>
                        {
                            peticion === 'Creando' ?
                                <button className='btn btn-info' onClick={() => crearEmpleado()}>Guardar Registro</button> :
                                <button className='btn btn-warning' onClick={() => sendDataToUpdate()}>Actualizar Registro</button>
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid p-2 bg-success text-center">
                <h2>MÓDULO EMPLEADOS</h2>
            </div>
            <div className='container my-4'>
                <div className='container-fluid text-center'>
                    <button className='btn btn-outline-success btn-md' onClick={() => {
                        setPeticion(prevValue => 'Creando')
                        limpiarFormulario()
                        toggleFormVisibility()
                    }}>Nuevo Registro</button>
                </div>
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
                                                    <button type="button" className="btn btn-outline-danger" onClick={() => eliminarEmpleado(e.id_empleado)}>Eliminar</button>
                                                    <button type="button" className="btn btn-outline-warning" onClick={() => {
                                                        actualizarEmpleado(e)
                                                    }}>Actualizar</button>
                                                </div>
                                            </th>
                                        </tr>
                                    )
                                })
                                : console.log("no hay datos")
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AgregarEmpleado