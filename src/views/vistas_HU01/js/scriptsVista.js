let usuarioInput = document.getElementById('numeroIdentificacionUsuario');
let usuarioContraseña = document.getElementById('contraseñaUsuario');
let tipoIdUsuario = document.getElementById('identificacionUsuarion').value;
let errorMessage = document.querySelectorAll('.errorMessage');
let btnIniciarSesion = document.getElementById('iniciarSesionButton');

btnIniciarSesion.addEventListener('click', () => {
      console.log(usuarioInput);
      if (usuarioInput.value === '' || usuarioContraseña.value === '' || tipoIdUsuario === '') {
            errorMessage.forEach(inputAuxiliar => {
                  inputAuxiliar.classList.remove('hidden');
            });
      } else {
            errorMessage.forEach(inputAuxiliar => {
                  inputAuxiliar.classList.add('hidden');
            });  
      }
});


