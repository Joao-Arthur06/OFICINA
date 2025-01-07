function gerarCorAleatoria() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function mudarCorDeFundo() {
    document.body.style.backgroundColor = gerarCorAleatoria();
}