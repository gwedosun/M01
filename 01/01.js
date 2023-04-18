function solucao(jogadores) {
    let zeros = [];
    let uns = [];

    for (let jogador of jogadores) {
        if (jogador.jogada === 0) {
            zeros.push(jogador);
        } else {
            uns.push(jogador);
        }
    }

    if (zeros.length === 1) {
        console.log(zeros[0].nome);
    } else if (uns.length === 1) {
        console.log(uns[0].nome);
    } else {
        console.log("NINGUEM");
    }
}


solucao([
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]);