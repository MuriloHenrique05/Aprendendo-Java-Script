const pessoa = {
    nome:"Murilo", 
    idade: 24,
    email: "murilo@cdlpedenrieas.com"
}

console.log(pessoa)

// loop for in prop seria a propriedade não o valor
// quando coloca pessoa[prop] incluiu a propriedade com valor
for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
}