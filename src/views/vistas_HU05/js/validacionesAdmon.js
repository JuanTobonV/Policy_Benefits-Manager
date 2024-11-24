
let listaProveedoresAgregados = JSON.parse(localStorage.getItem("storageProveedoresAgregados")) || [];
let idCounter = listaProveedoresAgregados.length > 0 ? listaProveedoresAgregados[listaProveedoresAgregados.length - 1].id + 1 : 1;

let agregar = document.getElementById('btnAgregar');

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

    listaProveedoresAgregados.push(proveedor);
    localStorage.setItem("storageProveedoresAgregados", JSON.stringify(listaProveedoresAgregados));

    limpiarSelectores();
    mostrarSelectorBeneficios();
})


