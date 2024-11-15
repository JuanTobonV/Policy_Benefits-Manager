import { usuarios,CrearOpciones,MostrarBeneficioPoliza } from "./mostrarPolizas.js";

const selectPoliza = document.getElementById('polizas');
const selectBeneficio = document.getElementById('beneficios');

const tipoDocumento = document.getElementById('tipoDocumento')
const numeroDocumento = document.getElementById('numeroDocumento')
const nombreEmpleado = document.getElementById('nombreEmpleado')
const areaTrabajo = document.getElementById('areaTrabajo')
const numeroCelular = document.getElementById('numeroCelular')
const correo = document.getElementById('correo')
const ciudad = document.getElementById('ciudad')



const id = 1 // se manda desde inicio sesion ya se por url o localstorage
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
  
})