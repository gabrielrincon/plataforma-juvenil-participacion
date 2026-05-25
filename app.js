const btnMensaje = document.getElementById('btnMensaje')
const mensajeClase = document.getElementById('mensajeClase')
const botonesPerfil = document.querySelectorAll('.btnPerfil')
const detallePerfil = document.getElementById('detallePerfil')

let contadorDeClicks = 0

btnMensaje.addEventListener('click', () => {
    // mensajeClase.textContent = '¡Hola! Este es un mensaje de alerta.'
    mensajeClase.textContent = 'el texto que quisimos mostrar' + contadorDeClicks
    contadorDeClicks = contadorDeClicks + 1


})

botonesPerfil.forEach((boton) => {
    boton.addEventListener('click', () => {
        const perfil = boton.getAttribute('data-perfil')
        detallePerfil.textContent = `Información detallada del perfil: ${perfil}`
    })
})