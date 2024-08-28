function Login() {
    return (
        <div className="container-fluid h-100 d-flex align-items-center justify-content-center flex-column">
            <h1 className='p-3 bg-success rounded'>RECOLECTORA MONBA</h1>
            <div className='container d-flex align-items-center justify-content-center'>
                <div className='p-4 my-4 bg-black rounded shadow-lg text-center mx-2' style={{ width: '350px' }}>
                    <h5>MONBA-EMPLEADOS</h5>
                    <input className='form-control my-4' placeholder='Usuario' />
                    <input className='form-control my-4' placeholder='Contraseña' />
                    <butto className='btn btn-outline-light'>INGRESAR</butto>
                </div>
                <div className='p-4 bg-black rounded shadow-lg text-center mx-2' style={{ width: '350px' }}>
                    <h5>MONBA-EMPLEADOS</h5>
                    <input className='form-control my-4' placeholder='Usuario' />
                    <input className='form-control my-4' placeholder='Contraseña' />
                    <butto className='btn btn-outline-light'>INGRESAR</butto>
                </div>
            </div>
        </div>
    )
}

export default Login