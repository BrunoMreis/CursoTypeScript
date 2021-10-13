import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    private negociacoes: Array<Negociacao> =[];


     listar(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    adicionar(negociacao: Negociacao): void {

        this.negociacoes.push(negociacao);
    }
}