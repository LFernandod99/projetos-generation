import { Times } from "./times";

export class Fluminense extends Times {
    mascote: string;



constructor(

    nomeOficial: string,
    nomeEstadio: string,
    dataFundacao: string,
    idade: number, 
    torcedores: string,
    mascote: string,
    idolo1: string,
    idolo2: string,
    idolo3: string

){ super( nomeOficial, nomeEstadio, dataFundacao,idade, torcedores, idolo1, idolo2, idolo3)
    this.mascote = mascote}

    verTime(){
        console.log(`O time carioca ${this.nomeOficial} tem o mascote ${this.mascote}
        \nFoi fundado em ${this.dataFundacao} e atua no estádio ${this.nomeEstadio}
        \nO time completou ${this.idade} anos em 2022 e tem ${this.torcedores} torcedores
        \nSeus ídolos do passado são ${this.idolo1}, ${this.idolo2}, ${this.idolo3}`)
    }

}