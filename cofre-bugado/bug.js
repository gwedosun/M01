function processData(input) {
    const linhas = input.trim().split("\n");
    const senhaCorreta = linhas[0];
    let senhaDigitada = linhas[1];

    for (let letra of senhaCorreta) {
        let index = senhaDigitada.indexOf(letra);
        if (index === -1) {
            console.log("NAO");
            return;
        } else {
            senhaDigitada = senhaDigitada.slice(index + 1);
        }
    }
    console.log("SIM");
}

processData("cubos\ncsubnous");