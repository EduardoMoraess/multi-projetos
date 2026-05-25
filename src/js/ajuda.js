const userName = document.getElementById('nome');
const resposta = document.getElementById('resumo')
const btnRelatorio = document.getElementById('relatar')

btnRelatorio.addEventListener('click', ()=>{
    let nome = userName.value;
    let resumo = resposta.value

    let numero = '87981443129'

    let textoFinal = `Olá, meu nome é ${nome}, Relatorio: ${resumo}`


    let urlWpp = `https://wa.me/${numero}?text=${encodeURIComponent(textoFinal)}`
    
    window.open(urlWpp, '_blank')
})