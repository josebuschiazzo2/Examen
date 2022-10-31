import { Examen } from './Examen';
import { RendicionDeExamen } from './RendicionDeExamen';

export class Alumno {
    private examenesRendidos: RendicionDeExamen[];
    private nombre: string;
    private dni: number;
    
    constructor(nombre:string,dni:number){
        this.nombre = nombre;
        this.dni = dni;
    }

    public getNombre():string{
        return this.nombre;
    }

    public getDNI():number{
        return this.dni;
    }

    public rendirExamen(examen:Examen, respuestas:number[]):boolean{
       let resultado:boolean = false;
       if(  )
    }


} // end class