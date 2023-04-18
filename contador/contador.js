function solucao(texto) {
    const palavrasSemCaracteres = texto.replace(",", "").replace(".", "").replace("/", "");
    const textoFormatado = palavrasSemCaracteres.trim().split(" ");
    const qntdPalavras = textoFormatado.length;
    console.log(qntdPalavras);
}


