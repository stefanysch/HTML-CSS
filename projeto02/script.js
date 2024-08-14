function incluirTexto() {
    let nome = document.getElementById('nome').value;
    document.getElementById('pergunta').innerText = "Olá " + nome + ", o que você deseja calcular?";
}

function exibirSoma() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let soma = numero1 + numero2;
    document.getElementById('resultado').innerText = "Soma: " + soma;
}

function exibirSubtracao() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let subtracao = numero1 - numero2;
    document.getElementById('resultado').innerText = "Subtração: " + subtracao;
}

function exibirMultiplicacao() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let multiplicacao = numero1 * numero2;
    document.getElementById('resultado').innerText = "Multiplicação: " + multiplicacao;
}

function exibirDivisao() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let divisao = numero1 / numero2;
    document.getElementById('resultado').innerText = "Divisão: " + divisao;
}

function exibirModulo() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let modulo = numero1 % numero2;
    document.getElementById('resultado').innerText = "Módulo: " + modulo;
}

function mostrarPopup() {
    document.getElementById('popup-text').innerText = "Você já bebeu água hoje?";
    document.getElementById('popup').style.display = "block";
}

function fecharPopup() {
    document.getElementById('popup').style.display = "none"; 
}



