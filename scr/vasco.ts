import { Times } from "./times";

export class vasco extends Times{
    cores: string
    

    constructor(
        nomeOficial: string,
        nomeEstadio: string,
        dataFundacao: string,
        idade: number,
        torcedores: string,
        cores: string,
        idolo1: string,
        idolo2: string,
        idolo3: string



    ) {
        super(nomeOficial, nomeEstadio, dataFundacao, idade, torcedores, idolo1, idolo2, idolo3)
        this.cores = cores

    }
    verTime(){
        console.log(`O time carioca ${this.nomeOficial} das cores ${this.cores}
        \nFoi fundado em ${this.dataFundacao} e atua no estádio ${this.nomeEstadio}
        \nO time completou ${this.idade} anos em 2022 e tem ${this.torcedores} torcedores
        \nSeus ídolos do passado são ${this.idolo1}, ${this.idolo2}, ${this.idolo3}`)
    }

}