//funções arrows
//é parecida com a Function Expression
//formado pelo nome de uma variavel ou constante
const legal = (n, g) => {
    return n + g
}

//se tiver apenas um parametro posso deixar fora dos parenteses
const legal2 = n => {
    return n
}

//é possivel deixar em apenas uma linha tbm, aqui não precisa colocar o return, o return está implicito
const legal3 = n => n + 1

console.log(legal(1,2))
console.log(legal2("oi"))
console.log(legal3(1))