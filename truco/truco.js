function solucao(carta) {
    const tabela = [
        {
            carta: "Q",
            manilha: "J"
        },
        {
            carta: "J",
            manilha: "K"
        },
        {
            carta: "K",
            manilha: "A"
        },
        {
            carta: "A",
            manilha: "2"
        },
        {
            carta: "2",
            manilha: "3"
        },
        {
            carta: "3",
            manilha: "Q"
        }
    ];

    const manilha = tabela.find((el) => {
        return el.carta === carta;
    });
    console.log(manilha.manilha);
}

solucao("Q");