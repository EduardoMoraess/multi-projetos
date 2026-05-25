/*function acessoProjetos()
{
    const acesso = document.getElementById('acess');

    acesso.addEventListener('click', ()=>{
        location.href = 'src/pages/multi-projetos.html'
    })
}
acessoProjetos()*/

const acesso = document.getElementById('acess');
const modal = document.querySelector('dialog');

acesso.addEventListener('click', ()=>{
    modal.showModal();
})

function configurarRedirecionamento(idElemento, url) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.addEventListener('click', () => {
            location.href = url;
        });
    }
}
// Uso:
configurarRedirecionamento('multi-tools', 'src/pages/multi-projetos.html');
configurarRedirecionamento('suporte', 'src/pages/help_disk.html');