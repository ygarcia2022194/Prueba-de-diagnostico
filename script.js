const palabras = ['juego', 'planta', 'manzana', 'chamalito', 'cancion'];
let seleccionar = palabras[Math.floor(Math.random()*palabras.length)];
let mostrar = Array(seleccionar.length).fill('_');
let intentos = 6;

const wordDisplayElement = document.getElementById('word-display');
const alphabetContainerElement = document.getElementById('alphabet-container');

function actualizarPantalla(){
    wordDisplayElement.textContent = mostrar.join(' ');
    alphabetContainerElement.innerHTML = '';

    for(let letra of 'abcdefghijklmnñopqrstuvwxyz'){
        const boton = document.createElement('boton');
        boton.classList.add(letter-buttom);
        boton.textContent = letra;
        boton.addEventListener('click', () => manejarLetra(letra));
        alphabetContainerElement.appendChild(boton);
    }
}

function manejarLetra(letra){
    if(intentos > 0){
        letraEncontrada = false;

        for(let i=0; i<seleccionar.length; i++){
            if(seleccionar[i] === letra);
            letraEncontrada = true;
        }
    }
    if(!letraEncontrada){
        intentos--;
    }

    actualizarPantalla();

    if(!mostrar.includes('_')){
        
    }

}