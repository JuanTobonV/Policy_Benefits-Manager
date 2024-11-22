import { usuarios } from '../../data/usuarios.js';

export function sesion(usuarioValidado) {
    localStorage.setItem('usuarioValidado', JSON.stringify(usuarioValidado));
    console.log("dentro de sesion");

    if (String(usuarioValidado.rol).toUpperCase() === 'ADMIN') {
        window.location.href = '../../views/vistas_HU05/admonPoliza.html';
    } else if (String(usuarioValidado.rol).toUpperCase() === 'EMPLEADO') {
        window.location.href = '../../views/vistas_HU02/verPolizasYBeneficios.html';
    }
}

const botonInicioSesion = document.getElementById('iniciarSesionButton');

botonInicioSesion.addEventListener('click', () => {
    const regexNumeros = /^[0-9]+$/;

    const inputTipoIdentificacionUsuario = document.getElementById('identificacionUsuarion').value;
    const inputNumeroUsuario = document.getElementById('numeroIdentificacionUsuario').value;
    const inputContraseñaUsuario = document.getElementById('contraseñaUsuario').value;

    let usuarioExistente = usuarios.find(usuario => 
        String(usuario.tipoDocumento).toUpperCase() === inputTipoIdentificacionUsuario && 
        usuario.numeroDocumento === inputNumeroUsuario && 
        usuario.contraseña === inputContraseñaUsuario
    );

    if (usuarioExistente && regexNumeros.test(inputNumeroUsuario)) {
        sesion(usuarioExistente);
    } else {
        Swal.fire({
            title: "Usuario no encontrado",
            icon: "error"
          });
    }
});
