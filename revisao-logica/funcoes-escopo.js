let n = "global";

function mostraN(){
    let n1 = "n1 local"
    
    if(true){
        var n2 = " n2 dentro de um if com var"
    }
    console.log(n2)
    console.log("Valor de n1: " + n1)
    console.log("Valor de n2: " + n2)
}
mostraN()

console.log("Valor de n no escopo global: " + n)

function fnExt(){

    let n = "n local na funcao fnExt"

    function FnInt(){
        let n = "n local na funcao FnInt"
        console.log(n)
    }
    FnInt()
    console.log(n)
}

fnExt();
