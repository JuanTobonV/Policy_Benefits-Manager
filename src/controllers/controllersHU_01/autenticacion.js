import {usuarios} from '../../data/usuarios.js'

export function sesion(usuarioValidado){
      localStorage.setItem('usuarioValidado', JSON.stringify(usuarioValidado))

      if(usuarioValidado.rol === 'administrador')
            window.location.href = '';
      else if(usuarioValidado.rol === 'empleado'){
            window.location.href = '';
      }
}



const botonInicioSesion = document.getElementById('iniciarSesionButton');

botonInicioSesion.addEventListener('click', () => {

      const inputTipoIdentificacionUsuario = document.getElementById('identificacionUsuarion').value;
      const inputNumeroUsuario = document.getElementById('numeroIdentificacionUsuario').value;
      const inputContraseñaUsuario = document.getElementById('contraseñaUsuario').value;

      console.log(inputTipoIdentificacionUsuario);
})
