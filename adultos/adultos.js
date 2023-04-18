function solucao(idades) {
    const maioresDeIdade = idades.filter(idade => idade >= 18);

    if (maioresDeIdade.length === 0) {
        console.log('CRESCA E APARECA');
    } else {
        const menorIdade = Math.min(...maioresDeIdade);
        console.log(menorIdade);
    }
}

solucao([12, 13, 18, 20]);