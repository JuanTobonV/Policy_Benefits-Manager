import {CrearOpcionesBeneficios, CrearOpcionesPolizas } from "./polizasYBeneficios.js";
import { usuarios } from "../../../data/usuarios.js";
import { FetchData } from "../../../controllers/controllers_HU02/fetch.js";

const selectPoliza = document.getElementById('polizas');
const selectBeneficio = document.getElementById('beneficios');
const formulario = document.getElementById('form');


const tipoDocumento = document.getElementById('tipoDocumento')
const numeroDocumento = document.getElementById('numeroDocumento')
const nombreEmpleado = document.getElementById('nombreEmpleado')
const areaTrabajo = document.getElementById('areaTrabajo')
const numeroCelular = document.getElementById('numeroCelular')
const correo = document.getElementById('correo')
const ciudad = document.getElementById('ciudad')


// se debe reemplazar con un get al empleado activo --------------------

const id = 10 // se manda desde inicio sesion ya se por url o localstorage
const usuarioActivo = usuarios.find( usuario => usuario.id === id)
//----------------------------------------------------------------------

tipoDocumento.textContent = usuarioActivo.tipoDocumento;
numeroDocumento.textContent = usuarioActivo.numeroDocumento;
nombreEmpleado.textContent = usuarioActivo.nombre;
areaTrabajo. textContent = usuarioActivo.areaTrabajo;
numeroCelular.textContent = usuarioActivo.numeroCelular;
correo.textContent = usuarioActivo.direccionCorreo;
ciudad.textContent = usuarioActivo.ciudad;

const empleadoId = 1 // se debe remplazar por el id dinamico del empleado registrado

FetchData(`http://localhost:8080/empleados/${empleadoId}/polizas`)
.then(poliza=> {
  
  const polizas = poliza.map(data => {
    return {nombre:data.nombrePoliza,id:data.id}
  })

  CrearOpcionesPolizas(polizas,selectPoliza);
})

selectPoliza.addEventListener('change',(e) => {
    let polizaId = e.target.value
  
    FetchData(`http://localhost:8080/proveedores/${polizaId}`)
    .then(proveedores=> {
     
      const beneficios = proveedores[0].beneficios.map(data =>{
        return {descripcion:data.descripcionBeneficio,id:data.id}
      })

      CrearOpcionesBeneficios(beneficios,selectBeneficio)
    })

  
});

formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    const polizaId = document.getElementById('polizas').value;
    const beneficioId = document.getElementById('beneficios').value;
    const fecha = new Date();
    const fechaFormato = fecha.toISOString().split('T')[0];


    const data = {
      empleado:empleadoId,
      beneficio:beneficioId,
      fechaSolicitud:fechaFormato,
      estadoSolicitud:"En Proceso",
      descripcionSolicitud:'',
      comentarioSolicitud:''
    }

    console.log(data) // Esta data se debe enviar con un post a empleadoBeneficio
    
      Swal.fire({
        title: "Benefico",
        text: "Ha Seleccionado su Benefico Correctamente",
        icon: "success",
        confirmButtonText: "Ok"
      })
})


