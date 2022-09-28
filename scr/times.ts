export abstract class Times {

    nomeOficial: string;
    nomeEstadio: string;
    dataFundacao: string;
    torcedores: string;
    idade: number;
    idolo1: string;
    idolo2: string;
    idolo3: string;

    constructor(
        nomeOficial: string,
        nomeEstadio: string,
        dataFundacao: string,
        idade: number,
        torcedores: string,
        idolo1: string,
        idolo2: string,
        idolo3: string
        
        
        
    ) {
        this.nomeOficial   = nomeOficial;
        this.nomeEstadio   = nomeEstadio;
        this.dataFundacao  = dataFundacao;
        this.idade         = idade;
        this.torcedores    = torcedores;
        this.idolo1        = idolo1;
        this.idolo2        = idolo2;
        this.idolo3        = idolo3;
        



    }

    verTime(){
        console.log(`O time carioca ${this.nomeOficial}
        \nFoi fundado em ${this.dataFundacao} e atua no estádio ${this.nomeEstadio}
        \nO time completou ${this.idade} anos em 2022 e tem ${this.torcedores} torcedores
        \nSeus ídolos do passado são ${this.idolo1}, ${this.idolo2}, ${this.idolo3}`)
}

}






