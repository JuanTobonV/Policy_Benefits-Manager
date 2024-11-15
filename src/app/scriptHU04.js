let empleados = [
    {
        fecha: '2024-11-01',
        nombre: 'Juan Pérez',
        area: 'Marketing',
        poliza: 'Vida',
        descripcion: '50% de descuento en membresia anual gimnasio BodyTech',
        id: 1
    },
    {
        fecha: '2024-10-20',
        nombre: 'María García',
        area: 'Recursos Humanos',
        poliza: 'Vehiculos',
        descripcion: '10% Descuento en compra llantas vehículo en AutollantasNutibara',
        id: 2
    },
    {
        fecha: '2024-09-15',
        nombre: 'Carlos López',
        area: 'Finanzas',
        poliza: 'Salud',
        descripcion: '20% de descuento en cita Medico deportivo Augusto Bermudes.',
        id: 3
    }
];

// Guardar los empleados en el localStorage
localStorage.setItem('empleados', JSON.stringify(empleados));



// Función para cargar los empleados desde el localStorage y mostrar en la tabla
function cargarTablaEmpleados() {
    let empleados = JSON.parse(localStorage.getItem('empleados'));  // Obtener los empleados del localStorage

    let tablaBody = document.querySelector('#empleadosTable tbody');
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
            <td><button onclick="verMasInfo(${empleado.id})">Ver más</button></td>
        `;
        
        tablaBody.appendChild(fila);
    });
}

// Función para mostrar más información en la ventana emergente
function verMasInfo(idEmpleado) {
    const empleados = JSON.parse(localStorage.getItem('empleados'));
    const empleado = empleados.find(emp => emp.id === idEmpleado);

    if (empleado) {
        document.getElementById('popupTitle').innerText = `Más Información de ${empleado.nombre}`;
        document.getElementById('popupDescription').innerText = `Área: ${empleado.area}\nDescripción: ${empleado.descripcion}`;
        document.getElementById('overlay').style.display = 'flex';  // Mostrar la ventana emergente
    }
}

// Función para cerrar la ventana emergente
document.getElementById('closeWindowBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';  // Cerrar la ventana emergente
});

// Cargar la tabla cuando la página se cargue
window.onload = cargarTablaEmpleados;