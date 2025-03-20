// + - * / % **

let n1 = 10;
let n2 = 5;

//OPERADORES ARITMÉTICOS
console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1/n2);
console.log(n1%n2);
console.log(2**3);

let n3 = 20; // 1 sinal de "=" atribuição
//n3 = n3 * 2;
n3 +=2
console.log(n3)

// INCREMENTO E DECREMENTO

let i = 0;

// i++; Pos Incremento
//i--; Pos Decremento

//++i Pre Incremento 
//--i Pos Decremento
 
console.log(++i);
console.log(i);

// COMPARAÇÃO

/*
    igualdade de valor ==
    igualdade de valor e tipo ===
    <,>, <=,>=
    != valores diferentes
    !== valores e tipos diferentes
*/

console.log(n1, n2, n3)

console.log( n1 != "10");
console.log( n1 !== "10");
 
// OPERADORES LOGICOS

/*
    Para uma pessoa viajar para o exterior:
    -precisa ser maior de 18 anos 
    OU
    Acompanhado com os pais 
    E
    ter comprado o bilhete
*/

let idade = 21;
let paisPresentes = false;
let bilhete = true;

const podeViajar = (idade >=18 || paisPresentes) && bilhete;

console.log(`Pode viajar: ${podeViajar}`)

console.log(n1, n2, n3);

n1 = 6;
n2 = 8;

let media = (n1 + n2) / 2;
console.log(`Sua média é: ${media}`);
console.log((3* 2) ** 2);

