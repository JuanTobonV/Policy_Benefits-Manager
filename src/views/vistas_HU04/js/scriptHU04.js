import { empleados } from "../../../data/empleado.js";

// Guardar los empleados en el localStorage
localStorage.setItem('empleados', JSON.stringify(empleados));

// Función para cargar los empleados desde el localStorage y mostrar en la tabla
function cargarTablaEmpleados() {
    let empleados = [];
    try{
        empleados = JSON.parse(localStorage.getItem('empleados')) || [];  // Obtener los empleados del localStorage
    }catch(error){
        console.error('error al cargar los empleados', error);
    }
    
    let tablaBody = document.querySelector('#tableBody');
    tablaBody.innerHTML = '';  // Limpiar el cuerpo de la tabla

    if(empleados.lenght === 0){
        let noEmpeadosMensaje = document.createElement('tr');
        noEmpeadosMensaje.innerHTML='<td colspan="6">No hay empleados disponibles</td>';
        tablaBody.appendChild(noEmpeadosMensaje);
        return;
    }
    // Iterar sobre los empleados y agregar una fila por cada uno
    empleados.forEach(empleado => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${empleado.fecha}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.area}</td>
            <td>${empleado.poliza}</td>
            <td>${empleado.descripcion}</td>
       `;
        let button = document.createElement('button');
        button.textContent = '👁';// este es el ojo 
        button.addEventListener('click', () => verMasInfo(empleado.id));
        fila.appendChild(button);

        tablaBody.appendChild(fila);
    });
}

// Función para mostrar más información en la ventana emergente
function verMasInfo(idEmpleado) {
    let empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    let empleado = empleados.find(emp => emp.id === idEmpleado);

    if (empleado) {
        document.getElementById('popupTitle').innerHTML = "Más Información de las solicitudes de"+"<br>"+empleado.nombre;
        document.getElementById('popupDescription').innerText = `Área: ${empleado.area}\nDescripción: ${empleado.descripcion}`;
        document.getElementById('overlay').style.display = 'flex';  // Mostrar la ventana emergente
    }
}

// Función para cerrar la ventana emergente
function closePopup(){
    document.getElementById('overlay').style.display = 'none';
}

// función para aceptar la solicitud
function acceptAction(){
    alert('!solicitud Aceptada');
    closePopup();
}

// funcion para rechazar la solicitud
function rejectAction(){
    if(confirm("estas seguro de rechazar la solicitud")){
        alert("solicitud rechazada");
        closePopup();
    }
}

//Asignar los eventos a los botones
document.getElementById('closeWindowBtn').addEventListener('click', closePopup)
document.getElementById('aceptar').addEventListener('click', acceptAction);
document.getElementById('rechazar').addEventListener('click',rejectAction);

// Cargar la tabla cuando la página se cargue
cargarTablaEmpleados();
