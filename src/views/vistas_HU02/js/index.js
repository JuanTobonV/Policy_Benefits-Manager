import {CrearOpciones,MostrarBeneficioPoliza } from "./polizasYBeneficios.js";
import { GuardarBeneficios } from "./beneficiosSelecionados.js";
import { usuarios } from "../../../data/usuarios.js";

const selectPoliza = document.getElementById('polizas');
const selectBeneficio = document.getElementById('beneficios');
const formulario = document.getElementById('form');

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



const id = 10 // se manda desde inicio sesion ya se por url o localstorage
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

formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    const polizaSeleccionada = document.getElementById('polizas').value;
    const beneficioSeleccionada = document.getElementById('beneficios').value;
    const fechaHora = new Date().toLocaleDateString('es-CO',{
        weekday: 'long', // Día de la semana
        year: 'numeric', // Año con 4 dígitos
        month: 'long', // Mes con nombre completo
        day: 'numeric', // Día del mes
      }); 
  

    const data = {
      polizaSeleccionada,
      beneficioSeleccionada,
      fechaHora,
      empleado:usuarioActivo.nombre,
      areaTrabajo:usuarioActivo.areaTrabajo,
      estadoSolicitud:"Proceso"
    }
    GuardarBeneficios([data],nombreEmpleado.innerText)
   
    /*Nota: La funcion guardar beneficio guarda en un array las polizas
        seleccionadas  y su respectivo beneficio seleccionado y esto a su vez
        se almacena en el localStorage, la clave donde se almacena cada array
        de cada usuario es el nombre de este
    */

if(selectBeneficio.value === '') return
    // poner redireccion
      Swal.fire({
        title: "Benefico",
        text: "Ha Seleccionado su Benefico Correctamente",
        icon: "success",
        confirmButtonText: "Ok"
      })
})


