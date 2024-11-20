function range(s, f, j=1) {
    let final = f
    let atual = s
    let jump = j
    let numb = []
    let n = 0
    if (f==undefined) {
        final = s
        atual = 1
    }
    if (atual > final) {
        jump = jump * -1
    }
    let quant = Math.abs(final - atual) + 1
    while (quant > 0) {
        numb[n] = atual
        atual = atual + jump
        quant = quant - j
        n = n + 1
    }
    return numb
}
  
console.log(range(8,-3,4))