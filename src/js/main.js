function acessoProjetos()
{
    const acesso = document.getElementById('acess');

    acesso.addEventListener('click', ()=>{
        location.href = 'src/pages/multi-projetos.html'
    })
}
acessoProjetos()