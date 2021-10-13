export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    listar() {
        return this.negociacoes;
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
}
