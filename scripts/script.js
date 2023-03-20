//Elementos
const botoes = document.querySelectorAll('.botao-carrossel');
const imagens = document.querySelectorAll('.imagem');

//Variaveis
let posicao = 0;
let intervalo;

//Funções
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function marcaBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function removerImagemFundo() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function ativarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

const ativarImagemAuto = () => {
    const maxImagens = imagens.length -1;

    if(posicao >= maxImagens){
        posicao = 0;
    } else {
        posicao ++;
    }

    desmarcarBotaoSelecionado();

    marcaBotaoSelecionado(botoes[posicao]);

    removerImagemFundo();

    ativarImagemFundo(posicao);

}

const intervaloMudarImagem = () => {
    intervalo = setInterval(ativarImagemAuto,7000)
}

//Eventos
botoes.forEach((botao,indice)=>{
    botao.addEventListener('click',()=>{

        desmarcarBotaoSelecionado();

        marcaBotaoSelecionado(botao);

        removerImagemFundo();

        ativarImagemFundo(indice);

        clearInterval(intervalo);
        posicao = indice;

        intervaloMudarImagem();
    })
})

intervaloMudarImagem();


