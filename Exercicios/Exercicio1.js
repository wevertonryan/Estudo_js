const read = require('readline-sync');

let array = [0];
let finalNum = 0;
let resp = "";

do {
    resp = read.question("Adicione um Numero a Array: ");
    if(!isNaN(Number(resp))){
        array[array.length+1] = resp;
        resp = read.question("Quer adicionar um novo numero?(S/N) ").toUpperCase();
    } else {
        console.log("Digite um Número!");
        resp = "S"
    }
} while(resp == "S" || resp == "SIM"); 

array.forEach((num)=>{
    switch (Number(num[num.length-1])) {
        case 0: case 2: case 4: case 6: case 8:
            finalNum += Number(num);
        break;
    }
});
console.log("A Soma dos Numeros pares desta Array dá " + finalNum);