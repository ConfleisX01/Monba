const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "monba"
})

app.get("/getAllEmpleados", (req, res) => {
    conexion.query('SELECT * FROM vista_empleado_completa WHERE estatus = 1', (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get("/getEmpleado", (req, res) => {
    const id = req.query.id;  // Obtenemos el id desde req.query

    if (id) {
        conexion.query('SELECT * FROM vista_empleado_completa WHERE id_empleado = ?', [id], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } else {
        res.status(400).send({ message: "El ID del empleado es requerido" });
    }
});

app.get("/getAllEmpleadosEliminados", (req, res) => {
    conexion.query('SELECT * FROM vista_empleado_completa WHERE estatus = 0', (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.put("/eliminarEmpleado", (req, res) => {
    const idEmpleado = req.body

    console.log(req.body)

    conexion.query('UPDATE empleado SET estatus = 0 WHERE id_empleado = ?', [idEmpleado], (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.put("/activarEmpleado", (req, res) => {
    const idEmpleado = req.body

    conexion.query('UPDATE empleado SET estatus = 1 WHERE id_empleado = ?', [idEmpleado], (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.get("/login", (req, res) => {
    const userName = req.query.userName;
    const password = req.query.userPassword;

    console.log(userName + " " + password);

    conexion.query('SELECT * FROM usuario WHERE nombre_usuario = ? AND contrasenia = ?', [userName, password], (err, result) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send('Error en la consulta');
        }
        console.log(result);
        res.json(result);
    });
});

app.put("/actualizarEmpleado", (req, res) => {
    console.log(req.body)

    const idEmpleado = req.body.idEmpleado
    const nombre = req.body.nombre
    const apellidoPaterno = req.body.apellidoPaterno
    const apellidoMaterno = req.body.apellidoMaterno
    const genero = req.body.genero
    const fechaNacimiento = req.body.fechaNacimiento
    const rfc = req.body.rfc
    const curp = req.body.curp
    const domicilio = req.body.domicilio
    const codigoPostal = req.body.codigoPostal
    const ciudad = req.body.ciudad
    const estado = req.body.estado
    const telefono = req.body.telefono
    const numeroLicencia = req.body.numeroLicencia
    const tipoLicencia = req.body.tipoLicencia
    const nombreUsuario = req.body.nombreUsuario
    const contrasenia = req.body.contrasenia
    const rol = req.body.rol
    const codigoEmpleado = req.body.codigoEmpleado
    const fechaIngreso = req.body.fechaIngreso
    const puesto = req.body.puesto
    const correo = req.body.correo
    const estatus = req.body.estatus
    const numeroPlaca = req.body.numeroPlaca
    const tipoVehiculo = req.body.tipoVehiculo
    const comentario = req.body.comentario
    const nombreExpediente = req.body.nombreExpediente
    const nombreNomina = req.body.nombreNomina
    const nombreAlta = req.body.nombreAlta
    const nombreVacaciones = req.body.nombreVacaciones

    conexion.query('CALL ActualizarEmpleado(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idEmpleado, nombre, apellidoPaterno, apellidoMaterno, genero, fechaNacimiento, rfc, curp, domicilio, codigoPostal, ciudad, estado, telefono,
            numeroLicencia, tipoLicencia, nombreUsuario, contrasenia, rol, codigoEmpleado, fechaIngreso, puesto, correo, estatus, numeroPlaca, tipoVehiculo, comentario,
            nombreExpediente, nombreNomina, nombreAlta, nombreVacaciones
        ]
        , (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error al actualizar el empleado.');
            } else {
                res.send('Empleado actualizado exitosamente.');
                console.log(result);
            }
        });
});


app.listen(3001, () => {
    console.log('El servidor se alojo en el puerto http://localhost:3001')
})