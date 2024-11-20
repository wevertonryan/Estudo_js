//function expression
//é quando guardamos uma função anonima(que não tem nome) dentro de uma variavel ou constante
//função anonima
(function (){
    return "oi leticia"
})

//atribuindo uma função a uma variavel
const oi = function(a,b){
    console.log('oi leticia')
    return a + b
}

//é como utilizar uma variavel/constante como uma função
console.log(oi(1,2))

//atribuindo o valor da constante "oi" que armazena uma função anonima em uma outra varivel essa mesma função anonima
let leticia = oi

//printando no console esses valores
console.log(leticia(3,4) + oi(10,10))