function solucao(numeros) {
    const soma = numeros.reduce((el, nEl) => {
        return el + nEl;
    });
    const resto = soma % numeros.length;

    if (resto === 0) {
        console.log(numeros.length);
    } else {
        console.log(resto);
    }
}

solucao([2, 1, 4, 1]);