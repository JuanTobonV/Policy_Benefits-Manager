import { consultarEmpleados } from "../../sevice/service_HU01/service__HU01.js";



    const botonInicioSesion = document.getElementById('iniciarSesionButton');

    
    botonInicioSesion.addEventListener('click', () => {

        const URL = "http://localhost:8080/api/empleado"

        consultarEmpleados(URL).then((respuestaBack) => {
        
        const inputTipoIdentificacionUsuario = document.getElementById('identificacionUsuarion').value;
        const inputNumeroUsuario = document.getElementById('numeroIdentificacionUsuario').value;
        

        let usuarioExistente = respuestaBack.find(usuario => 
            String(usuario.tipoIdentificacion).toUpperCase() === inputTipoIdentificacionUsuario && 
            usuario.numeroIdentificacion == inputNumeroUsuario
        );

        if (usuarioExistente) {
            console.log(usuarioExistente);
            sesion(usuarioExistente);
        }
        else{
            Swal.fire({
                title: "Usuario no encontrado",
                icon: "error"
              });
        }
    });
})

export function sesion(usuarioValidado) {
    
    const userId = usuarioValidado.id;

    if (String(usuarioValidado.rol).toUpperCase() === 'ADMIN') {
        window.location.href = `../../views/vistas_HU05/admonPoliza.html?id=${userId}`;
    } else if (String(usuarioValidado.rol).toUpperCase() === 'EMPLEADO') {
        window.location.href = `../../views/vistas_HU02/verPolizasYBeneficios.html?id=${userId}`
    }
}



