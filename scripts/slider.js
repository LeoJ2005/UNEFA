'use strict'

const contenedor = document.querySelector('.contenedor-imagen')
const punto = document.querySelectorAll('.punto')

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {

        let posicion = i
        let operacion = posicion * -33.33

        contenedor.style.transform = `translateX(${ operacion }%)`

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        
        punto[i].classList.add('activo')
    })
})