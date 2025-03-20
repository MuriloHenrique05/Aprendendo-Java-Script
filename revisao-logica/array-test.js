const pessoa = ["Murilo", 24, "murilo@cdlpederneiras.com"]
const pessoas = {nome: "Henrique", idade: 32, email: "henrique@cldsads"}

const test = [{
    nome: "Murilo",
    idade: 42,
    email: "murilo-geronimo@ormsas.com"
},{
    nome: "Bruna",
    idade: 22,
    email: "geronimo@ormsas.com"
},{
    nome: "Felipe",
    idade: 62,
    email: "felipe@ormsas.com"
},{
    nome: "Murilo12",
    idade: 422,
    email: "murilo-g123eron@as.com"
}]


for(let i = 0; i < test.length; i++){
    console.log(`Nome ${i}: ${test[i].nome} ${test[i].idade}`)
    
}

// console.log(pessoas)
// console.log(pessoa)