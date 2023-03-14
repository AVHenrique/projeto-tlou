/* 
Quando clicar no botao mostrar a imagem de fundo correspondente

passo 1- pegar elemento HTML dos botoes

passo 2-identificar clique do usuario

passo 3-desmarcar o botao selecionado

passo 4-marcar o botao clicado

passo 5-esconder imagem anterior

passo 6-aparecer a imagem correspondente do botao
*/

// passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
//passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //passo 3
        desativarBotaoSelecionado();

        //passo 4
        selecionarBotaoCarrossel(botao);

        //passo 5
        esconderImagemAtiva();
        
        //passo 6
        mostrarImagemDeFundo(indice);
    })
})


function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

