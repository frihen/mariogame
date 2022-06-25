const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe')

const marioDead = document.getElementById('mariodead')

//ANIMAÇÃO DE PULO
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1000);
}

//GAME-OVER: AS ANIMAÇÕES VÃO PARAR(menos a nuvem.)
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    //CONDIÇÃO DE GAME-OVER
    if(pipePosition <= 100 && marioPosition < 70){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png'
        mario.style.width = '70px'
    }
})

//
document.addEventListener('keydown', jump);