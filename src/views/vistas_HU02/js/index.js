import {CrearOpciones,MostrarBeneficioPoliza } from "./mostrarPolizas.js";
import { usuarios } from "../../../data/usuarios.js";

const selectPoliza = document.getElementById('polizas');
const selectBeneficio = document.getElementById('beneficios');


// const selectPolizaRequered = document.querySelector('#polizas [required]');
// const selectBeneficioRequered = document.querySelector('#beneficios [required]');

const tipoDocumento = document.getElementById('tipoDocumento')
const numeroDocumento = document.getElementById('numeroDocumento')
const nombreEmpleado = document.getElementById('nombreEmpleado')
const areaTrabajo = document.getElementById('areaTrabajo')
const numeroCelular = document.getElementById('numeroCelular')
const correo = document.getElementById('correo')
const ciudad = document.getElementById('ciudad')
const btnEnviar = document.getElementById('btn-enviar')



const id = 5 // se manda desde inicio sesion ya se por url o localstorage
const usuarioActivo = usuarios.find( usuario => usuario.id === id)

tipoDocumento.textContent = usuarioActivo.tipoDocumento;
numeroDocumento.textContent = usuarioActivo.numeroDocumento;
nombreEmpleado.textContent = usuarioActivo.nombre;
areaTrabajo. textContent = usuarioActivo.areaTrabajo;
numeroCelular.textContent = usuarioActivo.numeroCelular;
correo.textContent = usuarioActivo.direccionCorreo;
ciudad.textContent = usuarioActivo.ciudad;

CrearOpciones(usuarioActivo.polizas,selectPoliza);

selectPoliza.addEventListener('change',(e) => {
    const nombrePoliza = e.target.value
    MostrarBeneficioPoliza(nombrePoliza,selectBeneficio)
  
});

btnEnviar.addEventListener('click',(e) => {
    
   if(selectBeneficio.value === '') return
    // poner redireccion
      Swal.fire({
        title: "Benefico",
        text: "Ha Seleccionado su Benefico Correctamente",
        icon: "success",
        confirmButtonText: "Ok"
      }).then((result) => {
        if (result.isConfirmed) {
          // Llama a tu función personalizada o redirecciona directamente
          redireccionarPagina();
        }
      });
      
      // Definir tu función de redirección personalizada
      function redireccionarPagina() {

        // poner redireccion
        window.location.href = "#"; // Cambia esta URL a donde quieras redirigir
      }

})