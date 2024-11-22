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
    // esto es parcial, hay que enviarlo cuando en realidad se agregue la poliza
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Haz agregado correctamente",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
        title: 'text--blue'
        }
    });

    limpiarSelectores();
    mostrarSelectorBeneficios();
})
