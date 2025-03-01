const read = require('readline-sync');
let resp;
//resp = read.question()

class MeuArray {
    constructor(elementos = undefined){
        if(elementos != undefined){
            this.itens = [...elementos];
        } else {
            this.itens = [];
        }
        this.tamanho = this.tamanhoArray()
    }

    adicionar(elemento){
        console.log(this.tamanho)
        resp = read.question(this.tamanho)
        this.itens[this.tamanho] = elemento;
        this.tamanho++;
    }

    remover(posicao = this.tamanho - 1){
        if(this.tamanho < 1){
            console.log("Não há nada para ser deletado!")
            return;
        } else if (posicao >= this.tamanho) {
            console.log("Posição mencionada não existe!")
            return;
        }

        let array_controle = [];
        let i = 0;
        this.itens.forEach((atribuicao, indice)=>{
            if(indice != posicao){
                array_controle[i] = atribuicao;
                i++;
            }
        })
        this.itens = array_controle;
        this.tamanho--;
    }

    limpar(){
        this.itens = [];
        this.tamanho = 0;
    }

    tamanhoArray(){
        if(this.itens==undefined){
            return 0
        }
        for(let i = 0; true; i++){
            if(this.itens[i] == undefined){
                return i;
            }
        }
    }

    objeto(n = 0){
        if(this.tamanho < 1 || n > this.tamanho - 1){
            return undefined;
        }
        return this.itens[n]
    }
}

let array_teste = new MeuArray(["oi","james","livia"]);
let tarefas_empresa = new MeuArray();
for(let i = 1; i <= 5; i++){
    tarefas_empresa.adicionar(`Tarefa ${i}`);
}
console.log(tarefas_empresa.itens)
tarefas_empresa.remover()
console.log(tarefas_empresa.itens)