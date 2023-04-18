// economiaMediaDiaria(2, 3, 4);
// let mediaAritmetica = soma / economiaMediaDiaria.length;
// console.log(mediaAritmetica)

function economiaMediaDiaria(lista) {
    let soma = 0;
    for (i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    const mediaAritmetica = soma / lista.length;
    console.log(mediaAritmetica);
}
