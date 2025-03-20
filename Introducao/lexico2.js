//capacidade do JavaScript de armazenar diversos tipos em uma mesma variavel

let x = 10
x = "uma string"

console.log(x)

let msg = 'uma "as" string'

console.log(msg)

console.log("8" * 2)

 function teste(){
     console.log(this)
}

const teste2 = () => {
    console.log('teste2')
    console.log(this)
}

 teste()

 const obj = {
    n: 1,  
    teste,
    teste2
}

 obj.teste2()
