import { obtnerIdUrl } from "../../../sevice/service_HU03/obtenerBeneficios.js";
import { consultarBeneficios } from "../../../controllers/controllers_HU03/controller_HU03.js";

// Función para cargar los empleados desde el localStorage y mostrar en la tabla
function cargarTablaEmpleados() {
    consultarBeneficios().then((respuestaBack) => {
        respuestaBack.map((prueba) => console.log(prueba.empleado.id));
        console.log(typeof(obtnerIdUrl()));
        
        let respuestaBackPrueba = respuestaBack.filter((prueba) => prueba.empleado.id === +obtnerIdUrl());

        respuestaBackPrueba.forEach(empleado => {
            console.log(empleado);
            let tablaBody = document.querySelector('#tableBody');
            tablaBody.innerHTML = '';

            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${empleado.fechaSolicitud}</td>
                <td>${empleado.beneficio.descripcionBeneficio}</td>
                <td class="flex_data">
                ${
                   empleado.estadoSolicitud === "Aceptada" ?
                   `<button class="estado-btn green" data-id="${empleado.empleado.id}">${empleado.estadoSolicitud}</button>`
                   :
                   empleado.estadoSolicitud === "Rechazada" ? 
                   `<button class="estado-btn red" data-id="${empleado.empleado.id}">${empleado.estadoSolicitud}</button>` 
                   :
                   `<button class="estado-btn yellow" data-id="${empleado.empleado.id}">${empleado.estadoSolicitud}</button>` 
                }
                </td>
            `;
    
            // Agregar el evento al botón de estado para mostrar la ventana emergente
            let estadoButton = fila.querySelector('.estado-btn');
            estadoButton.addEventListener('click', () => verMasInfo(empleado));
    
            tablaBody.appendChild(fila);

            // Función para mostrar más información en la ventana emergente
            function verMasInfo(idEmpleado) {
                if (idEmpleado) {
                    // Llenar los campos con los datos del empleado
                    document.getElementById('fecha-solicitud').textContent = idEmpleado.fechaSolicitud;
                    document.getElementById('beneficio-solicitud').textContent = idEmpleado.beneficio.descripcionBeneficio;
                    document.getElementById('comentarios-solicitud').textContent = idEmpleado.comentarioSolicitud;

                    let estadoBox = document.getElementById('estado-solicitud');

                    if (idEmpleado && idEmpleado.estadoSolicitud) {
                        if (idEmpleado.estadoSolicitud === "Aceptada") {
                            estadoBox.classList.add("bg-blue");
                            estadoBox.innerHTML = `<span class="estado-btn-menu bg-green">${idEmpleado.estadoSolicitud}</span>`;
                        } else if (idEmpleado.estadoSolicitud === "Rechazada") {
                            estadoBox.classList.add("bg-red");
                            estadoBox.innerHTML = `<span class="estado-btn-menu bg-red">${idEmpleado.estadoSolicitud}</span>`;
                        } else {
                            estadoBox.classList.add("bg-yellow");
                            estadoBox.innerHTML = `<span class="estado-btn-menu bg-gray">${idEmpleado.estadoSolicitud}</span>`;
                        }
                    } else {
                        estadoBox.classList.add("bg-yellow");
                        estadoBox.innerHTML = `<span class="estado-btn-menu bg-gray">Estado desconocido</span>`;
                    }

                    // Mostrar la ventana emergente
                    document.getElementById('overlay').style.display = 'flex';
                } else {
                    console.error('Empleado no encontrado');
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
