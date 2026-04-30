const btnPorcentagem = document.getElementById('calc');
function calcPorentagem() {
    const valorCalc = document.getElementById('valor');
    const porcentagemCalc = document.getElementById('porcentagem');
    const resultado = document.getElementById('resultado')

    let valor = Number(valorCalc.value);
    let porcentagem = Number(porcentagemCalc.value);

    if (isNaN(valor) || isNaN(porcentagem) || valorCalc.value.length == 0) {
        alert('[ERRO] digite os valores corretos');
        return; //isso faz a função "parar" aqui casoaja erro;
    }

    let soma = (valor * porcentagem) / 100

    resultado.innerHTML = `Resultado é ${soma}`

}
btnPorcentagem.addEventListener('click', calcPorentagem)


// Calculadora de IMC
const imcCalc = document.getElementById('btn-imc');

function calcIMC() {
    const alturaInput = document.getElementById('altura');
    const pesoInput = document.getElementById('peso');
    const resultado = document.getElementById('resultado-imc');

    // Convertendo os valores dos inputs para números
    let peso = Number(pesoInput.value);
    let altura = Number(alturaInput.value);

    // Validação para não dividir por zero ou campos vazios
    if (peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Preencha os valores corretamente!";
        return;
    }

    // O cálculo usando as variáveis numéricas
    let imc = peso / (altura ** 2);
    let mensagem = '';

    switch(true) {
        case (imc < 18.5):
            mensagem = "Abaixo do peso";
            break;
        case (imc >= 18.5 && imc < 25):
            mensagem = "Peso ideal";
            break;
        case (imc >= 25 && imc < 30):
            mensagem = "Sobrepeso";
            break;
        default:
            mensagem = "Obesidade";
    }

    // Exibindo o resultado formatado
    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${mensagem})`;
}
imcCalc.addEventListener('click', calcIMC);