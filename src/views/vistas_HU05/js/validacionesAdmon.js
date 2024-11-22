const agregar = document.getElementById('btnAgregar');

agregar.addEventListener("click", function(event){
    
    let selectorProveedor = document.getElementById('selectorProveedor');
    let selectorPolizasActivas = document.getElementById('selector-polizas-activas');
    let selectorPolizasDisponibles = document.getElementById('selector-polizas-disponibles');
    let selectorBeneficios = document.getElementById('selector-beneficios');

    event.preventDefault();

    if(selectorProveedor.value === "0"){
        alert('Seleccione un proveedor');
        return;
    }

    if(selectorPolizasActivas.value === "0"){
        alert('Seleccione una poliza activa');
        return;
    }

    if(selectorPolizasDisponibles.value === "0"){
        alert('Seleccione una póliza disponible');
        return;
    }

    if(selectorBeneficios.value === "0"){
        alert('Seleccione un beneficio');
        return;
    }

    alert(`su provedor es: ${selectorProveedor.value}, su póliza activa es: ${selectorPolizasActivas.value}, la dispobible es: ${selectorPolizasDisponibles.value}, su beneficio es: ${selectorBeneficios.value}`)

})
