export class Reporte {
    constructor(
        public _id? : number,
        public numeroReporte?: number,
        public comentario?: string,
        public nombre?: string,
        public apellido?: string,
        public correo?: string,
        public direcion?: string,
        public referencia?: string,
        public tipoPersona?: string,
        public comentarioAdmin?: string,
        public notificado?: string)
        {
    }
}
