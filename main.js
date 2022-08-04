const listaBotoesFavoritos = document.querySelectorAll('.favorito');
const listaClassificacao = document.querySelectorAll('[data-classificacao]');
const listaConteudo = document.querySelectorAll('[data-conteudo]');




for (let contador = 0; contador < listaBotoesFavoritos.length; contador++){
    const botaoFavorito = listaBotoesFavoritos[contador]

    botaoFavorito.onclick = () => {
        if(botaoFavorito.classList[1] === 'clicado'){
            botaoFavorito.classList.remove('clicado');
        }else{
            botaoFavorito.classList.add('clicado');
        }
    }
}

desativaConteudos = () => {
    listaConteudo.forEach(conteudo => conteudo.classList.add('hide'));
}

limpaBarraClassificacao = () => {
    listaClassificacao.forEach(classificacao => classificacao.classList.remove('ativa'));
}

selecionaItemBarraClassificacao = (classificacao) => {
    classificacao.classList.add('ativa');
}

selecionaConteudoMostrado = (valor) => {
    

    if(valor === 'todos') {
        listaConteudo.forEach(conteudo => conteudo.classList.remove('hide'))
    }else{
        for (let contador = 0; contador < listaConteudo.length; contador++){
            const valorConteudo = listaConteudo[contador].dataset.conteudo
            if(valor === valorConteudo){
                listaConteudo[contador].classList.remove('hide');
            }
        }        
    }
}



listaClassificacao.forEach(classificacao => classificacao.addEventListener('click', () => {
    const valor = classificacao.dataset.classificacao;

    
    desativaConteudos();
    limpaBarraClassificacao();
    selecionaItemBarraClassificacao(classificacao);
    selecionaConteudoMostrado(valor);

}))
