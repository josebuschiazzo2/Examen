import { Examen } from './Examen';

export class RendicionDeExamen{
   
    private examen:Examen;
    private respuestas:number[];
    

    constructor (pexamen:Examen,prespuesta:number[]){
        this.examen=pexamen;
        this.respuestas=prespuesta;
    }

    
    public getExamen():Examen{
        return this.examen;
    }

    public estaAprobado(examen:Examen, respuestas:number[]): boolean{
        let resultado:boolean = false;
        if(this. ){
            
        }
    
        return resultado;
    }




} // fin clase