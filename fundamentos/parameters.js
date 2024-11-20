//Parametros
//função com três parametros
function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1,2,3)
//adicionei cinco parametros, o Java script vai ignorar os outros 2
logParams(1,2,3,4,5)
//o parametro faltante o Java Script vai definir com "undefined"
logParams(1,2)

//o valor de "x" será "undefined", pois não foi retornado nem um valor
let x = logParams()


//é possivel definir um valor padrão para os parametros caso nem um valor seja inserido no parametro
function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}

defaultParams(5, 5, 5) // => 5 5 5
defaultParams(5) // => 5 2 3

//definindo um parametro como Array para poder ter parametros infinitos
function logNums(nums) {
    console.log(nums)
}

logNums([1,2,3,4,5,6]) //definindo nums como Array com os "[]"

//os ... define um parametro (eu acho) como array
function logNums2(...nums) {
    console.log(nums)
}

logNums2(1,2,3,4,5,6,7,8) //não foi necessario os "[]" para definir como Array