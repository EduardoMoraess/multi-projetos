function gerarProtocolo() {
    const agora = new Date();
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    const aleatorio = Math.floor(1000 + Math.random() * 9000);

    return `${dia}${mes}${ano}-${aleatorio}`;
}

function registrarChamado() {
    const atendenteInput = document.getElementById('atendente');
    const motivoInput = document.getElementById('motivo');
    const boxResultado = document.getElementById('resultado-protocolo');

    // Validação
    if (!atendenteInput.value || !motivoInput.value) {
        alert("Preencha todos os campos antes de gerar o protocolo.");
        return;
    }

    const protocolo = gerarProtocolo();

    // Inserção dos dados nos spans corretos
    document.getElementById('displayProtocolo').innerText = protocolo;
    document.getElementById('displayAtendente').innerText = atendenteInput.value;
    document.getElementById('displayMotivo').innerText = motivoInput.value;

    // Reseta o estado do botão de copiar
    const btnCopiar = document.getElementById('btnCopiar');
    const feedback = document.getElementById('feedback-protocolo');
    btnCopiar.innerText = "Copiar";
    feedback.style.display = 'none';

    // Mostra o card de resultado
    boxResultado.style.display = 'block';
}

async function copiarProtocolo() {
    const protocoloTexto = document.getElementById('displayProtocolo').innerText;
    const btn = document.getElementById('btnCopiar');
    const feedback = document.getElementById('feedback-protocolo');

    if (!protocoloTexto) return;

    try {
        await navigator.clipboard.writeText(protocoloTexto);

        btn.innerText = "OK!";
        feedback.style.display = 'inline';

        setTimeout(() => {
            btn.innerText = "Copiar";
            feedback.style.display = 'none';
        }, 2000);
    } catch (err) {
        console.error('Erro ao copiar: ', err);
    }
}