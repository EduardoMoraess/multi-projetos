const btn = document.getElementById('generate-btn');
const textInput = document.getElementById('text');
const qrContainer = document.getElementById('qrcode');

btn.addEventListener('click', () => {
    const textValue = textInput.value.trim();

    if (!textValue) {
        alert("Por favor, insira um texto ou URL!");
        return;
    }

    // Limpa o QR Code anterior, se houver
    qrContainer.innerHTML = "";

    // Gera o novo QR Code
    new QRCode(qrContainer, {
        text: textValue,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H // Nível de correção de erro alto
    });
});