import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {


    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    


    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');


    }


    adiciona(): void {
        const negociacao = this.criaNegociacao();

        this.negociacoes.adicionar(negociacao);

        console.log(this.negociacoes.listar());

        this.liparFormulario();

       
    }


    liparFormulario() {
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputQuantidade.value= '';
        this.inputData.focus();
        
    }

    criaNegociacao(): Negociacao {
        const regex = /-/g;
        const date = new Date(this.inputData.value.replace(regex, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value);

         
        return new Negociacao(date, quantidade, valor);
    }

}

