// arguments se comporta como um array, mas não tem todos os metodos que uma array tem

function somar () {
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total +=arguments[i]
    }
    return total
}

console.log(somar(1, 2, 3))

console.log(somar(1, 2, 3, 4, 5))

console.log(somar(1, 2, 3, 4, 5, 12, 14, 50))

console.log(somar.name)