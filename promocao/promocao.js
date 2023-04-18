function solucao(itens) {
    const numItens = itens;
    let qntdItens = itens.length;
    let precoFinal = 0;

    numItens.sort(function (a, b) {
        return a - b; // a-b crescente; b-a descrescente.
    });
    if (qntdItens < 3) {
        precoFinal = numItens.reduce(function (valor, proxValor) {
            return valor + proxValor;
        });
    } else if (qntdItens >= 3) {
        let desconto = numItens[0] / 2;
        precoFinal = numItens.slice(1).reduce(function (valor, proxValor) {
            return valor + proxValor;

        });
        precoFinal += desconto;

    }
    console.log(precoFinal);
}



solucao([500, 400]);