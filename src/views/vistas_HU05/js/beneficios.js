import { EnviarBeneficio, EliminarBeneficio } from "../../../controllers/controllers_HU05/controller_HU05.js";
import { beneficios } from "../../../data/proveedores.js";

let agregar = document.getElementById('btnAgregar');
let eliminar = document.getElementById('btnEliminar');


// Mostrando los proveedores desde la BBDD en el selector y la info de los inputs de acuerdo al proveedor, aplicando fetch
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
        // CARGAR BENEFICIOS
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
        selectorBeneficios.addEventListener("change", (e) => {
            console.log(e.target)
            const beneficioSeleccionado = beneficios.find(beneficio => beneficio.id === Number(e.target.value));
            delete beneficioSeleccionado.id;
            beneficioSeleccionado.proveedor = {id: proveedorSeleccionado.id}

            agregar.addEventListener("click", () => {
                EnviarBeneficio("http://localhost:8080/api/beneficios", beneficioSeleccionado)
                .then(beneficio => console.log(beneficio))

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
                 
            }) // listener para agregar beneficio a la BBDD           
        }) // listener selector de beneficios
    }) // listener selector de proveedores
}) // fetch

// CARGAR BENEFICIOS A ELIMINAR

const selectorBeneficioEliminar = document.getElementById('selector-beneficios-eliminar');

// Función para cargar beneficios en el selector
const cargarBeneficios = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/beneficios");
        
        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error al cargar beneficios: ${response.statusText}`);
        }

        const beneficios = await response.json();
        console.log(beneficios);

        // Limpiar y agregar las opciones al selector
        selectorBeneficioEliminar.innerHTML = '<option value="0">Seleccione...</option>';
        beneficios.forEach((beneficio) => {
            const option = document.createElement("option");
            option.textContent = beneficio.descripcionBeneficio;
            option.value = beneficio.id;
            selectorBeneficioEliminar.appendChild(option);
        });

    } catch (error) {
        console.error("Error al cargar beneficios:", error);

        // Mostrar mensaje de error al usuario
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudieron cargar los beneficios. Intenta más tarde.",
        });
    }
};

// Función para eliminar un beneficio seleccionado
const eliminarBeneficioSeleccionado = async () => {
    const beneficioId = Number(selectorBeneficioEliminar.value);

    if (beneficioId === 0) {
        Swal.fire({
            icon: "warning",
            title: "Atención",
            text: "Por favor, selecciona un beneficio para eliminar.",
        });
        return;
    }

    try {
        // Llamar la función EliminarBeneficio
        const url = "http://localhost:8080/api/beneficios";
        await EliminarBeneficio(url, beneficioId);

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Beneficio eliminado con éxito",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                title: 'text--red',
            },
        });

        // Recargar la lista de beneficios después de eliminar
        cargarBeneficios();

    } catch (error) {
        console.error("Error al eliminar el beneficio:", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo eliminar el beneficio. Intenta más tarde.",
        });
    }
};

// Agregar evento al botón de eliminar
btnEliminar.addEventListener("click", eliminarBeneficioSeleccionado);

// Cargar beneficios al iniciar
cargarBeneficios();




// limpiar selectores --------------------------------------------------
function limpiarSelectores(){
    let selectores = ['selectorProveedor', 'selector-beneficios'];
    selectores.forEach(selectores => {
    document.getElementById(selectores).value = "0";
    })
}