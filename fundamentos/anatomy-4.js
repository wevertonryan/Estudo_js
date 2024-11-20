//função anonima sendo chamada assim que foi criada, pois não será possivel chamar ela depois no código, já que ele não tem nenhuma referencia
(function (a, b, c) {
    let x = 3 //variaveis let criadas dentro de uma função não pode ser chamada exteriormente
    console.log('result: ' + (a + b + c + x))
})(1, 2, 3);


//função imediatamente invocada
(function () {
    console.log("oi")
})();

(() => console.log('leticia'))();

//sendo sincero, não me parecem muito úteis