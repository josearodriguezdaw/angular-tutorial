export enum TaskStatus{
    Completada="C",
    EnProceso="EP",
    Pendiente="P"
}

export enum TaskPriority{
    Alta="A",
    Media="M",
    Baja="B"
}

export class Task {
    id:number;
    nombre:string;
    descripcion:string;
    prioridad:TaskPriority;
    estado:TaskStatus;
    fechaCreacion:Date;
    fechaExpiracion:Date;
    isDelete:boolean;

    constructor (id:number,nombre:string,descripcion:string,prioridad:TaskPriority,estado:TaskStatus,fechaCreacion:Date,fechaExpiracion:Date,isDelete:boolean){
        this.id = id;
        this.nombre = nombre;
        this.descripcion=descripcion;
        this.prioridad=prioridad;
        this.estado = estado;
        this.fechaCreacion = fechaCreacion;
        this.fechaExpiracion =fechaExpiracion;
        this.isDelete = isDelete;
    }

    getTextoEstado():string{
        let text="";
        switch(this.estado){
            case "EP": text="En proceso";break;
            case "C": text="Realizada"; break;
            case "P": text="Pendiente";break;
        }
        return text;
    }

    getTextoPrioridad():string{
        switch(this.prioridad){
            case "A": return "Alta";break;
            case "M": return "Media"; break;
            case "B": return "Baja";break;
            default: return "";
        }
    }
}