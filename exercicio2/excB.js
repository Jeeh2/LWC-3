import { LightningElement } from 'lwc';

export default class Exc3B extends LightningElement {


    //aqui é o meu objeto que esá recebendo as minhas variáveis
    infos = {
        fistname: '',
        lastname: '',
        phone: '',
        email:'',
        web: '',
        receita: '',
        empresa: ''

    }

    //aqui estou criando um array vazio
    new =[];

    //aqui é o meu evento, o meu método que pega os meus dados
    handleInputChange(event){
        console.log("Valor do campo: " +event.detail.value);//aqui estou identificando os valores que estão sendo inseridos na lista

         //target seleciona exatamente o que quero puxar
        let nameinfos = event.target.name;
        let value= event.detail.value;


        //montando o objeto infos com valores
        this.infos = {
            ...this.infos, [nameinfos]:value
        };

        console.log(this.infos);


      /*  let infos = JSON.stringify(this.infos);
        let objetoJSON = JSON.parse(infos);
        console.log(objetoJSON);*/
    }


    onSpread(){


        this.new = [4,5,6, ...this.infos];
        console.log(this.new)
    }

    
}
