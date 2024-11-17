import {usuarios} from '../../data/usuarios.js'

export function sesion(usuarioValidado){
      sessionStorage.setItem('usuarioValidado', JSON.stringify(usuarioValidado))
      
      console.log("dentro de sesion");

      if(usuarioValidado.rol === 'admin')
            window.location.href = '../../views/vistas_HU01/prueba.html';
      else if(usuarioValidado.rol === 'empleado'){
            window.location.href = '../../views/vistas_HU01/prueba2.html';
      }
}



const botonInicioSesion = document.getElementById('iniciarSesionButton');

botonInicioSesion.addEventListener('click', () => {

      const regexNumeros = /^[0-9]+$/;

      const inputTipoIdentificacionUsuario = document.getElementById('identificacionUsuarion').value;
      const inputNumeroUsuario = document.getElementById('numeroIdentificacionUsuario').value;
      const inputContraseñaUsuario = document.getElementById('contraseñaUsuario').value;
      
      let usuarioExistente = usuarios.find(usuario => String(usuario.tipoDocumento).toUpperCase() === inputTipoIdentificacionUsuario && usuario.numeroDocumento === inputNumeroUsuario && usuario.contraseña === inputContraseñaUsuario );

      if (usuarioExistente && regexNumeros.test(inputNumeroUsuario)){

            sesion(usuarioExistente)

      } else {

            alert('Error')
      }
      
      
})
