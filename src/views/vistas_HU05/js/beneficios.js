import { EnviarBeneficio, EliminarBeneficio } from "../../../controllers/controllers_HU05/controller_HU05.js";
import { beneficios } from "../../../data/proveedores.js";

let agregar = document.getElementById('btnAgregar');
let eliminar = document.getElementById('btnEliminar');

eliminar.addEventListener("click", () => {
    EliminarBeneficio()
    .then(beneficio => console.log(beneficio))

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Haz eliminado un beneficio",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
        title: 'text--red'
        }
    });
    limpiarSelectores();
})

// Mostrando los proveedores desde la BBDD en el selector aplicando fetch
let selectorProveedor = document.getElementById('selectorProveedor');

fetch("http://localhost:8080/proveedores")
.then(res=>res.json())
.then(proveedores => {
console.log(proveedores)
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

        /* INFORMACIÓN DE INPUTS */
        let numeroIdentificacion = document.getElementById('numeroIdentificacion');
        let nombreProveedor = document.getElementById('nombreProveedor');
        let razonSocial = document.getElementById('razonSocialProveedor');
        let telefonoProveedor = document.getElementById('telefonoProveedor');
        let correoProveedor = document.getElementById('emailProveedor');
        let ciudadProveedor = document.getElementById('ciudadProveedor');
        
        if (proveedorSeleccionado) {
            numeroIdentificacion.value = proveedorSeleccionado.numeroIdentificacion;
            nombreProveedor.value = proveedorSeleccionado.razonSocial;
            razonSocial.value = proveedorSeleccionado.razonSocial;
            telefonoProveedor.value = proveedorSeleccionado.telefonoProveedor;
            correoProveedor.value = proveedorSeleccionado.correoProveedor;
            ciudadProveedor.value = proveedorSeleccionado.ciudadProveedor;
        }


        selectorBeneficios.addEventListener("change", (e) => {
            console.log(e.target)
            const beneficioSeleccionado = beneficios.find(beneficio => beneficio.id === Number(e.target.value));
            delete beneficioSeleccionado.id;
            beneficioSeleccionado.proveedor = {id: proveedorSeleccionado.id}
            agregar.addEventListener("click", () => {

                EnviarBeneficio("http://localhost:8080/api/beneficios", beneficioSeleccionado)
                .then(beneficio => console.log(beneficio))``

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Haz agregado un nuevo beneficio",
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                    title: 'text--blue'
                    }
                });
                limpiarSelectores();
            })

            // eliminar.addEventListener("click", () => {
            //     EliminarBeneficio()
            //     .then(beneficio => console.log(beneficio))

            //     Swal.fire({
            //         position: "center",
            //         icon: "success",
            //         title: "Haz eliminado un beneficio",
            //         showConfirmButton: false,
            //         timer: 2000,
            //         customClass: {
            //         title: 'text--red'
            //         }
            //     });

            //     limpiarSelectores();
            // })
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
})

function limpiarSelectores(){
    let selectores = ['selectorProveedor', 'selector-beneficios'];
    selectores.forEach(selectores => {
    document.getElementById(selectores).value = "0";
    })
}