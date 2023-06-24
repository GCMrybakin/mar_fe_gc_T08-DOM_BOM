(function() {
    let pantalla = document.querySelector('.pantalla');
    let botones = document.querySelectorAll('.btn');
    let limpiar = document.querySelector('.btn-danger.clear');
    let calculo = document.querySelector('.btn-success.equal');

    botones.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            pantalla.value += value;
        });
    });

    calculo.addEventListener('click', function(e) {
        if (pantalla.value === '') {
            pantalla.value = "Introduce valores";
        } else {
            try {
            let respuesta = calcular(pantalla.value);
            pantalla.value = respuesta;
            } catch (error) {
            pantalla.value = "Error";
            }
        }
    });

    limpiar.addEventListener('click', function(e) {
        pantalla.value = "";
    });

    function calcular(expresion) {
        expresion = expresion.replace(/[^-()\d/*+.]/g, '');

        return Function(`'use strict'; return (${expresion})`)();
    }
})();