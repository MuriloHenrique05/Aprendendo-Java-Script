const nome = ["Murilo", "Bruna","" ]
const pessoa = {nome: "Daniel", idade: 10, email: ""}
const pessoa1 = {}


const pessoas = [{
    nome: "Daniel", 
    idade: 10
},{
    nome: "Murilo", 
    idade: 24
},{
    nome: "Bruna", 
    idade: 23
},{
    nome: "Matheus", 
    idade: 26
}]

//console.log(pessoas[0].nome)

for(let i = 0; i < pessoas.length ; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}

