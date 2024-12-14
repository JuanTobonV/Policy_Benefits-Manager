import { FetchEmpleadoSolicitud, FetchModificarEstadoSolicitud } from "../../../controllers/controllers_HU04/controller_1_HU04.js";

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
    const textarea = document.getElementById('comentario')
    document.getElementById('overlay').style.display = 'flex';  // Mostrar la ventana emergente

    console.log(empleado.beneficio.id)
    console.log(empleado.empleado.id)
    const url =`http://localhost:8080/api/empleadoBeneficio/${empleado.empleado.id}/${empleado.beneficio.id}`
      
    textarea.addEventListener("input", function() {
        let valorComentario = textarea.value;

         // Referencias a los botones
    const aceptarBtn = document.getElementById('aceptar');
    const rechazarBtn = document.getElementById('rechazar');

    // Clonar los botones para limpiar listeners antiguos
    const nuevoAceptarBtn = aceptarBtn.cloneNode(true);
    const nuevoRechazarBtn = rechazarBtn.cloneNode(true);

    // Reemplazar los botones en el DOM
    aceptarBtn.parentNode.replaceChild(nuevoAceptarBtn, aceptarBtn);
    rechazarBtn.parentNode.replaceChild(nuevoRechazarBtn, rechazarBtn);

    // Asignar los nuevos eventos
    nuevoAceptarBtn.addEventListener('click', () => {
        const valorComentario = textarea.value; // Mantener el valor del textarea
        const modificador = {
            comentarioSolicitud: valorComentario,
            estadoSolicitud: "Aceptada"
        };

        FetchModificarEstadoSolicitud(url, modificador)
            .then(res => console.log(res))
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Solicitud aceptada!',
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    closePopup();
                });
            });
    });

    nuevoRechazarBtn.addEventListener('click', () => {
        const valorComentario = textarea.value; // Mantener el valor del textarea
        const modificador = {
            comentarioSolicitud: valorComentario,
            estadoSolicitud: "Rechazada"
        };

        Swal.fire({
            title: '¿Estás seguro de rechazar la solicitud?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#007bff',
            cancelButtonColor: '#ed0000',
            confirmButtonText: 'Sí, rechazar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                FetchModificarEstadoSolicitud(url, modificador).then(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Solicitud rechazada',
                        showConfirmButton: false,
                        timer: 1200
                    }).then(() => {
                        closePopup();
                    });
                });
            }
        });
    });
       
    });
 
}

// Llamar a la API y cargar la tabla con los datos obtenidos
FetchEmpleadoSolicitud('http://localhost:8080/api/empleadobeneficio')
    .then(data => {
        cargarTablaEmpleados(data); // Pasar los datos a la función de carga
        console.log(data)
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


