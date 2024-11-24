import { proveedores } from "../../../data/proveedores.js";

let identificacionProveedor = document.getElementById('numeroIdentificacion');
let nombreProveedor = document.getElementById('nombreProveedor');
let razonSocial = document.getElementById('razonSocialProveedor');
let telefonoProveedor = document.getElementById('telefonoProveedor');
let correoProveedor = document.getElementById('emailProveedor');
let ciudadProveedor = document.getElementById('ciudadProveedor');

let selectorProveedor = document.getElementById('selectorProveedor');

// Limpiar el select antes de añadir las nuevas opciones
const cargarProveedores = () => {
    // Limpiar las opciones existentes
    selectorProveedor.innerHTML = '<option value="0">Seleccione...</option>';
    
    // Agregar las nuevas opciones
    proveedores.forEach(function(proveedor){
        let option = document.createElement("option");
        option.textContent = proveedor.nombre;
        option.value = proveedor.NIT;
        selectorProveedor.appendChild(option);
    });
};
selectorProveedor.addEventListener("focus", cargarProveedores);

/************************************************************************************** */

// PÓLIZAS ACTIVAS Y DISPONIBLES SERÁN LAS MISMAS
// Limpiar el select antes de añadir las nuevas opciones

let selectorPolizasActivas = document.getElementById('selector-polizas-activas');

const cargarPolizasActivas = () => {
    // Limpiar las opciones existentes
    selectorPolizasActivas.innerHTML = '<option value="0">Seleccione...</option>';
    
    // Agregar las nuevas opciones
    const id = selectorProveedor.value; // capturmos el id del proveedor seleccionado
    const proveedorPolizaActiva = proveedores.find( proveedor => proveedor.NIT === id) // buscamos en el foreahc de proveedores el NIT  y lo comparamos con el id para que corresponda al proveedor que seleccionamos

    proveedorPolizaActiva.polizasActivas.forEach(function(polizaActivaAux, index){ // ACA PINTAMOS EL SELECTOR DE POLIZAS ACTIVAS

        console.log(proveedorPolizaActiva.id)

        let option = document.createElement("option");
        option.textContent = polizaActivaAux;
        option.value =  `${index+1}`;
        selectorPolizasActivas.appendChild(option);
    });
};
selectorPolizasActivas.addEventListener("focus", cargarPolizasActivas);

/*****************************************************************************************/

/* PÓLIZAS DISPONIBLES */


let selectorPolizasDisponibles = document.getElementById('selector-polizas-disponibles');

const cargarPolizasDisponibles = () => {
    // Limpiar las opciones existentes
    selectorPolizasDisponibles.innerHTML = '<option value="0">Seleccione...</option>';
    
    // Agregar las nuevas opciones
    const id = selectorProveedor.value; // capturmos el id del proveedor seleccionado
    const proveedorPolizaDisponible = proveedores.find( proveedor => proveedor.NIT === id) // buscamos en el foreahc de proveedores el NIT  y lo comparamos con el id para que corresponda al proveedor que seleccionamos

    proveedorPolizaDisponible.polizasDisponibles.forEach(function(polizaDisponibleAux, index){ // ACA PINTAMOS EL SELECTOR DE POLIZAS ACTIVAS
        let option = document.createElement("option");
        option.textContent = polizaDisponibleAux;
        option.value = `${index+1}`;
        selectorPolizasDisponibles.appendChild(option);
    });
};
selectorPolizasDisponibles.addEventListener("focus", cargarPolizasDisponibles);

/*****************************************************************************************/

/* BENEFICIOS */


let selectorBeneficios = document.getElementById('selector-beneficios');

const cargarBeneficios = () => {
    // Limpiar las opciones existentes
    selectorBeneficios.innerHTML = '<option value="0">Seleccionar beneficio</option>';
    
    // Agregar las nuevas opciones
    const id = selectorProveedor.value; // capturmos el id del proveedor seleccionado
    const proveedorBeneficios = proveedores.find(proveedor => proveedor.NIT === id) // buscamos en el foreahc de proveedores el NIT  y lo comparamos con el id para que corresponda al proveedor que seleccionamos

    proveedorBeneficios.beneficios.forEach(function(beneficioAux, index){ // ACA PINTAMOS EL SELECTOR DE POLIZAS ACTIVAS
        let option = document.createElement("option");
        option.textContent = beneficioAux;
        option.value = `${index+1}`;
        selectorBeneficios.appendChild(option);
    });
};
selectorBeneficios.addEventListener("focus", cargarBeneficios);







