export class User {
    constructor(
        public name: string,
        public apellido: string,
        public correo: string,
        public direccion: string,
        public referencia: string,
        public tipoPersona: string,
        public comentario: string,
        public imagen: HTMLImageElement
    ){}

}
