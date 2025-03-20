/* Quando uma função ela é criada, automaticamente ela é içada pro topo,
mas quando esse função passa a ser guardada em uma variavel,
o JavaScript só vai ler a função quando a variavel for lida.
*/


//teste()
const teste = function teste(){
    console.log("teste")
}

teste()

/* O hoisting da varial ele funciona quase igual da função, quando ela é criada
vai para o topo do documento, mas a atribuição do valor só sera criado,
quando passar na linha da variavel.*/

//console.log(minhaVar)
// var minhaVar = "variavel"
// console.log(minhaVar)