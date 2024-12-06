import { FetchEmpleadoSolicitud } from "../../../controllers/controllers_HU04/controller_1_HU04.js";

// Función para cargar la tabla con datos obtenidos desde la API
function cargarTablaEmpleados(empleados) {
    let tablaBody = document.querySelector('#tableBody');
    tablaBody.innerHTML = ''; // Limpiar el cuerpo de la tabla

    if (empleados.length === 0) {
        let noEmpleadosMensaje = document.createElement('tr');
        noEmpleadosMensaje.innerHTML = '<td colspan="6">No hay empleados disponibles</td>';
        tablaBody.appendChild(noEmpleadosMensaje);
        return;
    }

    // Iterar sobre los empleados y agregar una fila por cada uno
    empleados.forEach(empleado => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${empleado.fechaSolicitud}</td>
            <td>${empleado.empleado.nombreEmpleado}</td>
            <td>${empleado.empleado.areaTrabajo}</td>
            <td>${empleado.beneficio.descripcionBeneficio}</td>
        `;

        // Crear una celda para el botón
        let celdaBoton = document.createElement('td');
        celdaBoton.style.textAlign = 'center'; // Alinear horizontalmente
        celdaBoton.style.verticalAlign = 'middle'; // Alinear verticalmente

        let button = document.createElement('button');
        button.textContent = '👁'; // Botón con icono de ojo
        button.addEventListener('click', () => verMasInfo(empleado));

        celdaBoton.appendChild(button);
        fila.appendChild(celdaBoton);

        tablaBody.appendChild(fila);
    });
}


// Función para mostrar más información en la ventana emergente
function verMasInfo(empleado) {
    document.getElementById('nombreE').innerHTML = empleado.empleado.nombreEmpleado;
    document.getElementById('area').innerHTML = empleado.empleado.areaTrabajo;
    document.getElementById('fecha').innerHTML = empleado.fechaSolicitud;
    document.getElementById('beneficio').innerHTML = empleado.beneficio.descripcionBeneficio;
    document.getElementById('overlay').style.display = 'flex';  // Mostrar la ventana emergente
}

// Llamar a la API y cargar la tabla con los datos obtenidos
FetchEmpleadoSolicitud('http://localhost:8080/api/empleadobeneficio')
    .then(data => {
        cargarTablaEmpleados(data); // Pasar los datos a la función de carga
        console.log(data)
        console.log(data[0].fechaSolicitud)
        console.log(data[0].empleado.nombreEmpleado)
        console.log(data[0].empleado.areaTrabajo)
        console.log(data[0].beneficio.descripcionBeneficio)
    })
    .catch(error => {
        console.error('Error al obtener los empleados:', error);
    });

// Función para cerrar la ventana emergente
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('comentario').value = '';
    document.getElementById('desplegarcontraer').classList.remove('visible');
    document.getElementById('desplegarcontraer2').classList.remove('visible');
    document.getElementById('infoempleado').classList.remove('rotate-up');
    document.getElementById('infosolicitud').classList.remove('rotate-up');
}

// Funciones para aceptar/rechazar solicitudes
function acceptAction() {
    alert('¡Solicitud aceptada!');
    closePopup();
}

function rejectAction() {
    if (confirm('¿Estás seguro de rechazar la solicitud?')) {
        alert('Solicitud rechazada');
        closePopup();
    }
}

// Asignar eventos a botones de la interfaz
document.getElementById('infoempleado').addEventListener('click', function () {
    const contenido = document.getElementById('desplegarcontraer');
    contenido.classList.toggle('visible');
    this.classList.toggle('rotate-up');
});

document.getElementById('infosolicitud').addEventListener('click', function () {
    const contenido = document.getElementById('desplegarcontraer2');
    contenido.classList.toggle('visible');
    this.classList.toggle('rotate-up');
});

document.getElementById('closeWindowBtn').addEventListener('click', closePopup);
document.getElementById('aceptar').addEventListener('click', acceptAction);
document.getElementById('rechazar').addEventListener('click', rejectAction);

