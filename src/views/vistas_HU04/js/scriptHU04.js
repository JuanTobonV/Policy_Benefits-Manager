import { empleados } from "../../../data/empleado.js";

// Guardar los empleados en el localStorage
localStorage.setItem('empleados', JSON.stringify(empleados));



// Función para cargar los empleados desde el localStorage y mostrar en la tabla
function cargarTablaEmpleados() {
    let empleados = JSON.parse(localStorage.getItem('empleados'));  // Obtener los empleados del localStorage
    
    let tablaBody = document.querySelector('#tableBody');
    tablaBody.innerHTML = '';  // Limpiar el cuerpo de la tabla

    // Iterar sobre los empleados y agregar una fila por cada uno
    empleados.forEach(empleado => {
        const fila = document.createElement('tr');
        
        fila.innerHTML = `
            <td>${empleado.fecha}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.area}</td>
            <td>${empleado.poliza}</td>
            <td>${empleado.descripcion}</td>
            <td><button onclick="verMasInfo(${empleado.id})">&#128065;</button></td>
        `;
        
        tablaBody.appendChild(fila);
    });
}

// Función para mostrar más información en la ventana emergente
function verMasInfo(idEmpleado) {
    let empleados = JSON.parse(localStorage.getItem('empleados'));
    let empleado = empleados.find(emp => emp.id === idEmpleado);

    if (empleado) {
        document.getElementById('popupTitle').innerHTML = "Más Información de las solicitudes de"+"<br>"+empleado.nombre;
        document.getElementById('popupDescription').innerText = `Área: ${empleado.area}\nDescripción: ${empleado.descripcion}`;
        document.getElementById('overlay').style.display = 'flex';  // Mostrar la ventana emergente
    }
}

// Función para cerrar la ventana emergente
document.getElementById('closeWindowBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';  // Cerrar la ventana emergente
});

// Cargar la tabla cuando la página se cargue
cargarTablaEmpleados();
