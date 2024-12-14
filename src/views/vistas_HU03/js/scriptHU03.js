import { obtnerIdUrl } from "../../../sevice/service_HU03/obtenerIdUrl.js";
import { ObtenerBeneficiosEmpleados } from "../../../controllers/controllers_HU03/fetch.js";


// Función para cargar los empleados desde el localStorage y mostrar en la tabla
function cargarTablaEmpleados() {
    ObtenerBeneficiosEmpleados().then((respuestaBack) => {

        let listaBeneficiosUsuario = respuestaBack.filter((elem) => elem.empleado.id === +obtnerIdUrl())



        

        

        listaBeneficiosUsuario.forEach(empleado => {

            let tablaBody = document.querySelector('#tableBody');
            tablaBody.innerHTML = '';  // Limpiar el cuerpo de la tabla

            console.log(empleado);
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${empleado.fechaSolicitud}</td>
                <td>${empleado.beneficio.descripcionBeneficio}</td>
                <td>
                    <button class="estado-btn" data-id="${empleado.id}">${empleado.estadoSolicitud}</button>
                </td>
            `;

            // Agregar el evento al botón de estado para mostrar la ventana emergente
            let estadoButton = fila.querySelector('.estado-btn');
            estadoButton.addEventListener('click', (e) => verMasInfo(empleado));

            tablaBody.appendChild(fila);
        });

    })

        // Función para mostrar más información en la ventana emergente
    function verMasInfo(idEmpleado) {
        console.log(idEmpleado);


        if (idEmpleado) {
            // Llenar los campos con los datos del empleado
            document.getElementById('fecha-solicitud').textContent = idEmpleado.fechaSolicitud;
            document.getElementById('poliza-solicitud').textContent = idEmpleado.poliza;
            document.getElementById('beneficio-solicitud').textContent = idEmpleado.descripcion;
            document.getElementById('comentarios-solicitud').textContent = idEmpleado.comentarios;

            // Mostrar la ventana emergente
            document.getElementById('overlay').style.display = 'flex';
        } else {
            console.error('Empleado no encontrado');
        }
    }

    


}

// Función para cerrar la ventana emergente
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}



            // Asignar los eventos al botón de cerrar la ventana emergente
            document.getElementById('close-btn').addEventListener('click', closePopup);
        });
    }).catch((error) => {
        console.error('Error al consultar beneficios:', error);
    });
}

// Cargar la tabla cuando la página se cargue
cargarTablaEmpleados();

let empleadoId = obtnerIdUrl();

verMisSolicitudes.addEventListener('click',() =>{
    window.location.href = `/src/views/vistas_HU03/vista_HU03.html?id=${empleadoId}`
})

seleccionarSolicitudes.addEventListener('click',() =>{
    window.location.href = `/src/views/vistas_HU02/verPolizasYBeneficios.html?id=${empleadoId}`
})

