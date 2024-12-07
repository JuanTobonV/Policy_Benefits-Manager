import { EnviarBeneficio } from "../../../controllers/controllers_HU05/controller_HU05.js";
/*import { proveedores } from "../../../data/proveedores.js";*/
import { beneficios } from "../../../data/proveedores.js";

let selectorProveedor = document.getElementById('selectorProveedor');

   fetch("http://localhost:8080/proveedores")
    .then(res=>res.json())
    .then(proveedores => {
  
     // Limpiar las opciones existentes
     selectorProveedor.innerHTML = '<option value="0">Seleccione...</option>';
     // Agregar las nuevas opciones
     proveedores.forEach(function(proveedor){
         let option = document.createElement("option");
         option.textContent = proveedor.razonSocial;
         option.value = proveedor.id;
         selectorProveedor.appendChild(option);
     }) 
    
    selectorProveedor.addEventListener("change", (e) => {
        const proveedorSeleccionado = proveedores.find(proveedor => proveedor.id === Number(e.target.value));  
        document.getElementById('selectorProveedor').addEventListener("change", mostrarInfo);

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
   
    
/* CARGAR POLIZAS ACTIVAS*/
let selectorPolizasActivas = document.getElementById('selector-polizas-activas');

const cargarPolizasActivas = () => {
    // Limpiar las opciones existentes
    selectorPolizasActivas.innerHTML = '<option value="0">Seleccione...</option>';
    // Capturamos el id del proveedor seleccionado
    const id = selectorProveedor.value; 
    const proveedorPolizaActiva = proveedores.find(proveedor => proveedor.NIT === id); // Encontrar el proveedor
    // Si encontramos el proveedor, agregar sus pólizas activas al selector
    if (proveedorPolizaActiva && proveedorPolizaActiva.polizasActivas) {
        proveedorPolizaActiva.polizasActivas.forEach(function(polizaActivaAux, index) {
            let option = document.createElement("option");
            option.textContent = polizaActivaAux; // Pone el nombre de la póliza como texto
            option.value = `${index + 1}`; // Puedes usar otro valor si necesitas
            selectorPolizasActivas.appendChild(option);
        });
    }
};
// Escuchar el cambio de proveedor y cargar las pólizas activas
selectorProveedor.addEventListener("change", cargarPolizasActivas);
/* CARGAR PÓLIZAS DISPONIBLES = ACTIVAS */
let selectorPolizasDisponibles = document.getElementById('selector-polizas-disponibles');
const cargarPolizasDisponibles = () => {
    selectorPolizasDisponibles.innerHTML = '<option value="0">Seleccione...</option>';  
    // Agregar las nuevas opciones
    const id = selectorProveedor.value; // capturmos el id del proveedor seleccionado
    const proveedorPolizaDisponible = proveedores.find( proveedor => proveedor.NIT === id) // buscamos en el foreahc de proveedores el NIT  y lo comparamos con el id para que corresponda al proveedor que seleccionamos
    if (proveedorPolizaDisponible && proveedorPolizaDisponible.polizasActivas) {
    proveedorPolizaDisponible.polizasActivas.forEach(function(polizaDisponibleAux, index){ // ACA PINTAMOS EL SELECTOR DE POLIZAS ACTIVAS
        let option = document.createElement("option");
        option.textContent = polizaDisponibleAux;
        option.value = `${index+1}`;
        selectorPolizasDisponibles.appendChild(option);
    });
    }
};
selectorPolizasDisponibles.addEventListener("focus", cargarPolizasDisponibles);



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




/* INFORMACIÓN DE INPUTS */
const mostrarInfo = () => {
    // definimos el DOM
    let numeroIdentificacion = document.getElementById('numeroIdentificacion');
    let nombreProveedor = document.getElementById('nombreProveedor');
    let razonSocial = document.getElementById('razonSocialProveedor');
    let telefonoProveedor = document.getElementById('telefonoProveedor');
    let correoProveedor = document.getElementById('emailProveedor');
    let ciudadProveedor = document.getElementById('ciudadProveedor');
    // Obtener el valor seleccionado en el selector
    const id = document.getElementById('selectorProveedor').value;  // Se asegura de usar el id correcto
    // Buscar el proveedor con el NIT seleccionado
    const proveedor = proveedores.find(proveedor => proveedor.NIT === id);
    // Si se encuentra el proveedor, llenar el formulario
    if (proveedor) {
        numeroIdentificacion.value = proveedor.NIT;
        nombreProveedor.value = proveedor.nombre;
        razonSocial.value = proveedor.razonSocial;
        telefonoProveedor.value = proveedor.telefono;
        correoProveedor.value = proveedor.correo;
        ciudadProveedor.value = proveedor.ciudad;
    }
}



})