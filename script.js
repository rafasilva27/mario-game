const mario = document.querySelector('.mario'); //seleciona a classe mario 
const pipe = document.querySelector('.pipe');  


const jump = () => {
    mario.classList.add('jump'); //adiciona a classe jump 

    setTimeout(() => {
        mario.classList.remove('jump'); //remove a classe jump 
    }, 500)  //setTimeout é uma função que executa uma ação depois de um determinado tempo
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; //offsetLeft retorna a distância da esquerda do elemento
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') //replace pega o valor do estilo bottom e remove o px
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'; //remove a animação
        pipe.style.left = `${pipePosition}px`; //quando o pipe chegar na posição 120px, ele vai parar de se mover

        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png'; //troca a imagem do mario pelo mario game over
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); //stop loop
    }

}, 10);

document.addEventListener('keydown', jump); //quando qualquer tecla é pressionada, executa a função jump e a função jump adiciona a classe jump no mario