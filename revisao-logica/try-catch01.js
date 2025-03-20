

let soma= ""
try{
     soma = sum(3, 3);
}catch(e)
{
    console.log("Ocorreu um erro")
    console.log(e.message)
}finally{
    console.log("bloco finally")
}
console.log(soma);
console.log("fim do programa");