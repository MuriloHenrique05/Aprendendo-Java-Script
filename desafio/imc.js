
function calcIMC(peso, altura){
    if(peso === undefined || altura === undefined){
        throw new Error("Informar Parametros");
        
    }
    return peso / (altura * altura)
}

function ClassisicaIMC(imc){
    if(imc < 18.5){
        console.log("Abaixo do peso: IMC menor que 18,5")
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log("Eutrófico: IMC entre 18,5 e 24,9")
    }else if(imc >= 25 && imc <= 29.9){
        console.log("Sobrepeso: IMC entre 25 e 29,9")
    }
    else if(imc >= 30 && imc <= 34.9 ){
        console.log("Obesidade grau I: IMC entre 30 e 34,9")
    }
    else if(imc >= 35 && imc <= 39.9 ){
        console.log("Obesidade grau II: IMC entre 35 e 39,9")
    }else{
        console.log("Obesidade grau III: IMC maior que 40")
    }
}

let imc = calcIMC (80, 1.75);
console.log(imc)
ClassisicaIMC(imc)