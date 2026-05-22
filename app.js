const btnMensaje = document.getElementById('btnMensaje')
const mensajeClase = document.getElementById('mensajeClase')

let contadorDeClicks = 0

btnMensaje.addEventListener('click', () => {
    // mensajeClase.textContent = '¡Hola! Este es un mensaje de alerta.'
    mensajeClase.textContent = 'el texto que quisimos mostrar' + contadorDeClicks
    contadorDeClicks = contadorDeClicks + 1


})