export class Socio {
_nombre: string="";
_apellidos: string="";
_socio: string;
_dni: string;
_telefono: string;
_sexo: string;

constructor(
    nombre: string = '',
    apellidos: string = '',
    socio: string = '',
    dni: string = '',
    telefono: string = '',
    sexo: string= '',  

){
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._socio = socio;
    this._dni = dni;
    this._telefono = telefono;
    this._sexo = sexo;
}

set nombre(nombre: string) {
    this._nombre = nombre;
}

set apellidos(apellidos: string) {
    this._apellidos = apellidos;
}
set socio(socio: any) {
    this._socio = socio;
}
set dni (dni: string) {
    this._dni = dni;
}
set telefono(telefono: string) {
    this._telefono = telefono;
} 
set sexo(sexo: string) {
    this._sexo = sexo;
}

get nombre(): string {
    return this._nombre;
}
get apellidos(): string {
    return this._apellidos;
}
get socio(): string {
    return this._socio;
}
get dni(): string {
    return this._dni;
}
get telefono(): string {
    return this._telefono;
}
get sexo(): string {
    return this._sexo;
}

toObject(){
    return {
        nombre: this.nombre,
        apellidos: this.nombre,
        socio: this.socio,
        dni: this.dni,
        telefono: this.telefono,
        sexo: this.sexo,
  }
}
}