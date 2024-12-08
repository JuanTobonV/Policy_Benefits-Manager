import { EnviarBeneficio, ObtnerPolizas } from "../../../controllers/controllers_HU05/controller_HU05.js";
/*import { proveedores } from "../../../data/proveedores.js";*/
import { beneficios } from "../../../data/proveedores.js";

let agregar = document.getElementById('btnAgregar');
let eliminar = document.getElementById('btnEliminar');
// Función para agregar un registro a la tabla de beneficios de la BBDD y validaciones de campos vacíos
agregar.addEventListener("click", function(event){
    let numeroIdentificacion = document.getElementById('numeroIdentificacion');
    let nombreProveedor = document.getElementById('nombreProveedor');
    let razonSocial = document.getElementById('razonSocialProveedor');
    let telefonoProveedor = document.getElementById('telefonoProveedor');
    let correoProveedor = document.getElementById('emailProveedor');
    let ciudadProveedor = document.getElementById('ciudadProveedor');
    let selectorProveedor = document.getElementById('selectorProveedor');
    let selectorBeneficios = document.getElementById('selector-beneficios');

    event.preventDefault();

    if(selectorProveedor.value <= "0"){
        alert('Seleccione un proveedor');
        return;
    }
    if(selectorBeneficios.value <= "0"){
        alert('Seleccione un beneficio');
        return;
    }
    /*   
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El beneficio asociado a esta póliza ya se encuentra agregado!!!"
            });
            document.getElementById('selector-beneficios').value = "0";
            idCounter--; // este decremento es para que cada vez que se me repita un beneficio, se mantenga el id consecutivo por objetos
        return;
    }
       
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Haz agregado correctamente",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
            title: 'text--blue'
            }
        });*/
});

// Función para eliminar un registro a la tabla de beneficios de la BBDD y validaciones de campos vacíos (aún no está en funcionamiento)
eliminar.addEventListener("click", function(event){
    let alerta = window.confirm('¿Estás seguro que quieres eliminar este Beneficio?');
    if(alerta){
        let selectorProveedor = document.getElementById('selectorProveedor');
        let selectorBeneficios = document.getElementById('selector-beneficios');
        event.preventDefault();
        if(selectorProveedor.value <= "0"){
            alert('Seleccione un proveedor');
            return;
        }
        if(selectorBeneficios.value <= "0"){
            alert('Seleccione un beneficio');
            return;
        }
    }        
});

// Mostrando los proveedores desde la BBDD en el selector aplicando fetch
let selectorProveedor = document.getElementById('selectorProveedor');

fetch("http://localhost:8080/proveedores")
.then(res=>res.json())
.then(proveedores => {

    selectorProveedor.innerHTML = '<option value="0">Seleccione...</option>';

    proveedores.forEach(function(proveedor){
        let option = document.createElement("option");
        option.textContent = proveedor.razonSocial;
        option.value = proveedor.id;
        selectorProveedor.appendChild(option);
    }) 
    // evento para encontrar el id del proveedor seleccionado en el selector
    selectorProveedor.addEventListener("change", (e) => {
        const proveedorSeleccionado = proveedores.find(proveedor => proveedor.id === Number(e.target.value));

        let agregar = document.getElementById('btnAgregar');
        selectorBeneficios.addEventListener("change", (e) => {
            console.log(e.target)
            const beneficioSeleccionado = beneficios.find(beneficio => beneficio.id === Number(e.target.value));
            delete beneficioSeleccionado.id;
            beneficioSeleccionado.proveedor = {id: proveedorSeleccionado.id}
            agregar.addEventListener("click", () => {
                EnviarBeneficio("http://localhost:8080/api/beneficios", beneficioSeleccionado)
                .then(luis => console.log(luis))
            })
        }) 
    })

    /* CARGAR BENEFICIOS */
    let selectorBeneficios = document.getElementById('selector-beneficios');
    const cargarBeneficios = () => {
        selectorBeneficios.innerHTML = '<option value="0">Seleccionar beneficio</option>';
        // Agregar las nuevas opciones
        const id = selectorProveedor.value;
        const proveedorBeneficios = proveedores.find(proveedor => proveedor.NIT === id) // buscamos en el foreahc de proveedores el NIT  y lo comparamos con el id para que corresponda al proveedor que seleccionamos
        beneficios.forEach(function(beneficioAux, index){ 
            let option = document.createElement("option");
            option.textContent = beneficioAux.descripcionBeneficio;
            option.value = `${beneficioAux.id}`;
            selectorBeneficios.appendChild(option);
        });
    };
    selectorBeneficios.addEventListener("focus", cargarBeneficios);
    ObtnerPolizas("http://localhost:8080/api/poliza")
    .then(polizas => console.log(polizas))
})

function limpiarSelectores(){
    let selectores = ['selectorProveedor', 'selector-polizas-activas', 'selector-polizas-disponibles', 'selector-beneficios'];
    selectores.forEach(selectores => {
    document.getElementById(selectores).value = "0";
    })
}