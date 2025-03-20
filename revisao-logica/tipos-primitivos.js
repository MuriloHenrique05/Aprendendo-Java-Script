// tipos primitivos = string, number, (int, floats), boolen
// undefined, null, symbol 


let minhaVar = "Minha \"String\" Testando"
let minhavar2 = 'Minha "String 2" Testando '
console.log(minhaVar)
console.log(minhavar2)

var minhavar3 = `minha templetate literal;`
console.log(minhavar3)

let idade = 40;

let msg = "Eu possuo: " + idade + " anos!"
let msg2 = `Eu possuo: ${idade} anos!`

console.log(msg);
console.log(msg2);

console.log(typeof msg, typeof idade) // verificando o tipo de variavel;

const n1 = 10;
const n2 = 1.1;

console.log(`O tipo de n1 é ${typeof n1} e o seu valor é ${n1}`);
console.log(`O tipo de n2 é ${typeof n2} e o seu valor é ${n2}`);

const isValid = false;
console.log(`isValid: ${isValid}`);
console.log(typeof isValid, `isValid: ${isValid}`);

let varTeste = null;
console.log(typeof varTeste, `varTest: ${varTeste}`);
varTeste = 10;
console.log(typeof varTeste, `varTest: ${varTeste}`);
