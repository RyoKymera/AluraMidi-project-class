/* Función que se repite constantemente:

function playSonidoPom (){
    document.querySelector('#sonido_tecla_pom').play();
}


document.querySelector('.tecla_pom').onclick = playSonidoPom; */


function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');



for(let contador = 0; contador < ListaDeTeclas.length; contador++){
    const tecla = ListaDeTeclas [contador];
    const Instrumento = tecla.classList[1];

    const idAudio = `#sonido_${Instrumento}`;
    console.log(idAudio);

    tecla.onclick = function(){
        playSonido(idAudio);
    }

    tecla.onkeydown = function(evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }
}



