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
    selectorProveedor.innerHTML = '<option value="">Selecciona proveedor</option>';
    
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

// PÓLIZAS ACTIVAS
// Limpiar el select antes de añadir las nuevas opciones

let selectorPolizasActivas = document.getElementById('selector-polizas-activas');

const cargarPolizasActivas = () => {
    // Limpiar las opciones existentes
    selectorPolizasActivas.innerHTML = '<option value="">Selecciona póliza activa</option>';
    
    // Agregar las nuevas opciones
    const id = selectorProveedor.value; // se manda desde inicio sesion ya se por url o localstorage
    const proveedorActivo = proveedores.find( proveedor => proveedor.NIT === id)

    proveedorActivo.beneficios.forEach(function(polizaActiva){ // ACA PINTAMOS EL SELECTOR DE POLIZAS ACTIVAS
        let option = document.createElement("option");
        option.textContent = polizaActiva;
        option.value = polizaActiva;
        selectorPolizasActivas.appendChild(option);
    });
};
selectorPolizasActivas.addEventListener("focus", cargarPolizasActivas);

/*****************************************************************************************/

/* PÓLIZAS DISPONIBLES */

