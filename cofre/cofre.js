// let numeros = [2, 3, 4, 6];

// // Exemplo de uso:
// const lista = [2, 3, 4];
// const media = mediaEconomia(lista);
// console.log(media); // imprime 3

const lista = [2, 3, 4];
const mediaAritmetica = economiaMediaDiaria(lista);

function economiaMediaDiaria(lista) {
    let soma = 0;
    for (let i = 0; i < lista.lenght; i++) {
        soma += lista[i];
    }
    return soma / lista.lenght;
}

console.log(mediaAritmetica);