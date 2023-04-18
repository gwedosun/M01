function solucao(min, max, valores) {
    const jogadoresPermitidos = valores.filter((el) => {
        return (el >= min && el <= max);
    });
    console.log(jogadoresPermitidos);
}

solucao(2, 10, [0, 5, 6, 10, 11]);