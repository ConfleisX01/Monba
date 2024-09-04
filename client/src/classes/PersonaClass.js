export default class PersonaClass {
    constructor(
        foto,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        genero,
        fechaNacimiento,
        rfc,
        curp,
        domicilio,
        codigoPostal,
        ciudad,
        estado,
        telefono,
        numeroLicencia,
        tipoLicencia
    ) {
        this.foto = foto;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.rfc = rfc;
        this.curp = curp;
        this.domicilio = domicilio;
        this.codigoPostal = codigoPostal;
        this.ciudad = ciudad;
        this.estado = estado;
        this.telefono = telefono;
        this.numeroLicencia = numeroLicencia
        this.tipoLicencia = tipoLicencia
    }
}