import { LightningElement } from 'lwc';

export default class creatForm extends LightningElement {
    nome;
    peso;
    altura;
    resultado;

        pegarValores2(event){

            this.peso = event.detail.value;
    };
        pegarValores3(event){
            this.altura = event.detail.value;
    };
        Click(){
            this.resultado = this.peso / (this.altura * this.altura);
    }
}