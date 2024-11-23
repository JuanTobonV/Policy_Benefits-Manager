const agregar = document.getElementById('btnAgregar');

let identificacionProveedor = document.getElementById('numeroIdentificacion');
let nombreProveedor = document.getElementById('nombreProveedor');
let razonSocial = document.getElementById('razonSocialProveedor');
let telefonoProveedor = document.getElementById('telefonoProveedor');
let correoProveedor = document.getElementById('emailProveedor');
let ciudadProveedor = document.getElementById('ciudadProveedor');

let listaProveedoresAgregados = JSON.parse(localStorage.getItem("storageProveedoresAgregados")) || [];
let idCounter = listaProveedoresAgregados.length > 0 ? listaProveedoresAgregados[listaProveedoresAgregados.length - 1].id + 1 : 1;

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

    let proveedor = {
        id: idCounter++,
        NIT: identificacionProveedor.value,
        nombre: nombreProveedor.value,
        razonSocial: razonSocial.value,
        telefono: telefonoProveedor.value,
        correo: correoProveedor.value,
        activa: selectorPolizasActivas.value,
        disponible: selectorPolizasDisponibles.value,
        beneficio: selectorBeneficios.value
    }
    console.log(proveedor)
    listaProveedoresAgregados.push(proveedor);
    localStorage.setItem("storageProveedoresAgregados", JSON.stringify(listaProveedoresAgregados));

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
