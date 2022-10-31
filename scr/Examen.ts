import { Pregunta } from './Pregunta';

export class Examen extends Pregunta {
    private preguntas: Pregunta[];
    private tema: string;
    private puntajeAprobacion: number;

    constructor(pconsigna: string, popciones: string[], popcionCorrecta: number, ppuntaje: number, tema: string, puntaje: number) {
        super(pconsigna, popciones, popcionCorrecta, ppuntaje);

        this.tema = tema;
        this.puntajeAprobacion = puntaje;
    }

    public addPregunta(ppregunta: Pregunta): void {
        this.preguntas.push(ppregunta);
    }

    public equals(o:object):boolean{ 
        
        let correcto:boolean=false;
        
       if (   ){
             correcto=true;
    }
        return correcto; 
    }

    public getTema(): string {
        return this.tema;
    }
}