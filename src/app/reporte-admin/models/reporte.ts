export class Reporte {
    constructor(
        public _id?:number,
        public numeroReporte?: Number,
        public comentario?: string,
        public nombre?: string,
        public apellido?: string,
        public correo?: string,
        public direcion?: string,
        public referencia?: string)
        {
    }
}
