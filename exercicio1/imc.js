import { LightningElement } from 'lwc';

export default class Exercinput extends LightningElement {
    nome;
    peso;
    alt;
    resultado;

    pegarValores2(event){

        this.peso = event.detail.value;
    };

    pegarValores3(event){

        this.alt = event.detail.value;
    };

    Click(){
    this.resultado = this.peso / (this.alt * this.alt);

}
}
