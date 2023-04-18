// 0.50/minuto; se > 20 min, 0.30/min TEMPO
// 0.70/km; se > 10km, 0.50/km; DISTANCIA
// arredondar para baixo;

function solucao(min, km) {
    let preco = 0;
    if (min <= 20) {
        preco += min * 50;
    } else {
        preco += 20 * 50 + ((min - 20) * 30);
    }

    if (km <= 10) {
        preco += km * 70;
    } else {
        preco += 10 * 70 + ((km - 10) * 50);
    }

    console.log(Math.floor(preco));

}



solucao(25, 11.5);