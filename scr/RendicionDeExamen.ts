import { Examen } from "./Examen";

export class RendicionDeExamen{
    private examen:Examen;
    private respuestas:number[];

    constructor (pexamen:Examen,prespuesta:number[]){
        this.examen=pexamen;
        this.respuestas=prespuesta;
    }

    private getExamen():Examen{
        return this.examen;
    }
}