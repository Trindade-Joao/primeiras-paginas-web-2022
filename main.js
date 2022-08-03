const listaBotoesFavoritos = document.querySelectorAll('.favorito')


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




