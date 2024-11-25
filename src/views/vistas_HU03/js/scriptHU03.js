import { empleados } from "../../../data/empleadRegistrado1.js";

// Guardar los empleados en el localStorage
localStorage.setItem('empleados', JSON.stringify(empleados));

// Función para cargar los empleados desde el localStorage y mostrar en la tabla
function cargarTablaEmpleados() {
    let empleados = [];
    try {
        empleados = JSON.parse(localStorage.getItem('empleados')) || [];  // Obtener los empleados del localStorage
    } catch (error) {
        console.error('Error al cargar los empleados', error);
    }

    let tablaBody = document.querySelector('#tableBody');
    tablaBody.innerHTML = '';  // Limpiar el cuerpo de la tabla

    if (empleados.length === 0) {
        let noEmpleadosMensaje = document.createElement('tr');
        noEmpleadosMensaje.innerHTML = '<td colspan="4">No hay empleados disponibles</td>';
        tablaBody.appendChild(noEmpleadosMensaje);
        return;
    }

    // Iterar sobre los empleados y agregar una fila por cada uno
    empleados.forEach(empleado => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${empleado.fecha}</td>
            <td>${empleado.poliza}</td>
            <td>${empleado.descripcion}</td>
            <td>
                <button class="estado-btn" data-id="${empleado.id}">${empleado.estado}</button>
            </td>
        `;

        // Agregar el evento al botón de estado para mostrar la ventana emergente
        let estadoButton = fila.querySelector('.estado-btn');
        estadoButton.addEventListener('click', (e) => verMasInfo(e.target.dataset.id));

        tablaBody.appendChild(fila);
    });
}

// Función para mostrar más información en la ventana emergente
function verMasInfo(idEmpleado) {
    let empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    let empleado = empleados.find(emp => emp.id === parseInt(idEmpleado)); // Asegurándonos de comparar correctamente

    console.log(empleado);  // Verifica que se está encontrando al empleado

    if (empleado) {
        // Llenar los campos con los datos del empleado
        document.getElementById('fecha-solicitud').textContent = empleado.fecha;
        document.getElementById('poliza-solicitud').textContent = empleado.poliza;
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
