export default class EmpleadoClass {
    constructor(
        codigoEmpleado,
        fechaIngreso,
        puesto,
        correo,
        estatus,
        numeroPlaca,
        tipoVehiculo,
        comentarios,
    ) {
        this.codigoEmpleado = codigoEmpleado;
        this.fechaIngreso = fechaIngreso;
        this.puesto = puesto;
        this.correo = correo;
        this.estatus = estatus;
        this.numeroPlaca = numeroPlaca;
        this.tipoVehiculo = tipoVehiculo;
        this.comentarios = comentarios;
    }
}
