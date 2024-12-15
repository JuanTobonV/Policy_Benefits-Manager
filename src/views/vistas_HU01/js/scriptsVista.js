let usuarioInput = document.getElementById('numeroIdentificacionUsuario');
let tipoIdUsuario = document.getElementById('identificacionUsuarion');
let errorMessage = document.querySelectorAll('.errorMessage');
let btnIniciarSesion = document.getElementById('iniciarSesionButton');

btnIniciarSesion.addEventListener('click', () => {
    let inputs = [
        { element: tipoIdUsuario, error: errorMessage[0], invalidValue: "none" },
        { element: usuarioInput, error: errorMessage[1], invalidValue: "" },
    ];

    inputs.forEach(input => {
        if (input.element.value === input.invalidValue) {
            input.error.classList.remove('hidden');
            input.element.classList.add('borderError');
        } else {
            input.error.classList.add('hidden');
            input.element.classList.remove('borderError');
        }
    });



    
});


