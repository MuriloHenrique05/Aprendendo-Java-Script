function calcmedia() {
    console.log(arguments);
    let num = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            console.log("Só aceitamos números");
            return;
        }
        num += arguments[i];
    }

    console.log("Está tudo Ok");
    let media = num / arguments.length;
    return media;
}

console.log(calcmedia(2, 3, 4)); // Deve retornar 3
