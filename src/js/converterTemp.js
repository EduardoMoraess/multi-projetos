const inputs = {
    c: document.getElementById('celsius'),
    f: document.getElementById('fahrenheit'),
    k: document.getElementById('kelvin'),
    res: document.getElementById('resultado-final')
};

//função para atualizar o apinel de texto

function atualizarDisplay() {
    inputs.res.innerHTML = `
        <p><strong>${c}</strong></p>
        <p><strong>${f}</strong></p>
        <p><strong>${k}</strong></p>
    `;
}

//Logica ao digitar celsius
inputs.c.addEventListener('input', () => {
    const val = parseFloat(inputs.c.value);

    if (!isNaN(val)) {
        const f = (val * 1.8 + 32).toFixed(2);
        const k = (val + 273.15).toFixed(2);
        inputs.f.value = f;
        inputs.k.value = k;
        atualizarDisplay(val, f, k);
    }
})

// Lógica ao digitar em Fahrenheit
inputs.f.addEventListener('input', () => {
    const val = parseFloat(inputs.f.value);
    if (!isNaN(val)) {
        const c = ((val - 32) / 1.8).toFixed(2);
        const k = (parseFloat(c) + 273.15).toFixed(2);
        inputs.c.value = c;
        inputs.k.value = k;
        atualizarDisplay(c, val, k);
    }
});

// Lógica ao digitar em Kelvin
inputs.k.addEventListener('input', () => {
    const val = parseFloat(inputs.k.value);
    if (!isNaN(val)) {
        const c = (val - 273.15).toFixed(2);
        const f = (c * 1.8 + 32).toFixed(2);
        inputs.c.value = c;
        inputs.f.value = f;
        atualizarDisplay(c, f, val);
    }
});