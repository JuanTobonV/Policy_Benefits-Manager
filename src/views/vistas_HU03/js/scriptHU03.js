
import { obtnerIdUrl } from "../../../sevice/service_HU03/obtenerBeneficios.js";

import { consultarBeneficios } from "../../../controllers/controllers_HU03/controller_HU03.js";



// Función para cargar los empleados desde el localStorage y mostrar en la tabla
function cargarTablaEmpleados() {
    consultarBeneficios().then((respuestaBack) => {
        respuestaBack.map((prueba) => console.log(prueba.empleado.id))
        console.log(typeof(obtnerIdUrl()));
        
        let respuestaBackPrueba = respuestaBack.filter((prueba) => prueba.empleado.id === +obtnerIdUrl())

        //Debugging
        // console.log(respuestaBackPrueba);
        // console.log(respuestaBackPrueba.beneficio.descripcionSolicitud);


        respuestaBackPrueba.forEach(empleado => {
            console.log(empleado);
            let tablaBody = document.querySelector('#tableBody');
            tablaBody.innerHTML = '';

            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${empleado.fechaSolicitud}</td>
                <td>${empleado.beneficio.descripcionBeneficio}</td>
                <td>
                    <button class="estado-btn" data-id="${empleado.empleado.id}">${empleado.estadoSolicitud}</button>
                </td>
            `;
    
            // Agregar el evento al botón de estado para mostrar la ventana emergente
            let estadoButton = fila.querySelector('.estado-btn');
            estadoButton.addEventListener('click', (e) => verMasInfo(e.target.dataset.id));
    
            tablaBody.appendChild(fila);
        });
    }).catch((error) => {
        console.error('Error al consultar beneficios:', error);
    });

    consultarBeneficios().then((respuestaBack => {




    }))

}

// Función para mostrar más información en la ventana emergente
function verMasInfo(idEmpleado) {
    let empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    let empleado = empleados.find(emp => emp.id === parseInt(idEmpleado)); // Asegurándonos de comparar correctamente

    console.log(empleado);  // Verifica que se está encontrando al empleado

    if (empleado) {
        // Llenar los campos con los datos del empleado
        document.getElementById('fecha-solicitud').textContent = empleado.fecha;
        document.getElementById('beneficio-solicitud').textContent = empleado.descripcion;
        document.getElementById('comentarios-solicitud').textContent = empleado.comentarios;

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

// Cargar la tabla cuando la página se cargue
cargarTablaEmpleados();
