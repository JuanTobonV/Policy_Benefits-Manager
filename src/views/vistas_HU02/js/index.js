import { CrearOpcionesBeneficios, CrearOpcionesPolizas } from "./polizasYBeneficios.js";
import { usuarios } from "../../../data/usuarios.js";
import { EnviarSolicitud, ObtnerPolizasYBeneficos } from "../../../controllers/controllers_HU02/fetch.js";
import { obtnerIdUrl } from "../../../sevice/service_HU02/obtenerIdUrl.js";
import { consultarEmpleados } from "../../../sevice/service_HU01/service__HU01.js";

const selectPoliza = document.getElementById('polizas');
const selectBeneficio = document.getElementById('beneficios');
const formulario = document.getElementById('form');
const verMisSolicitudes = document.getElementById('ver__solicitudes');


const tipoDocumento = document.getElementById('tipoDocumento')
const numeroDocumento = document.getElementById('numeroDocumento')
const nombreEmpleado = document.getElementById('nombreEmpleado')
const areaTrabajo = document.getElementById('areaTrabajo')
const numeroCelular = document.getElementById('numeroCelular')
const correo = document.getElementById('correo')
const ciudad = document.getElementById('ciudad')


const empleadoId = obtnerIdUrl()

const urlEmpleados = "http://localhost:8080/api/empleado"
const urlPolizas = `http://localhost:8080/empleados/${empleadoId}/polizas`
const urlBeneficos = (polizaId) => `http://localhost:8080/proveedores/${polizaId}`
const urlSolicitud = "http://localhost:8080/api/empleadoBeneficio"

consultarEmpleados(urlEmpleados)
  .then(empleados => {
    const empleado = empleados.find(empleado => empleado.id === Number(empleadoId))

    tipoDocumento.textContent = empleado.tipoIdentificacion;
    numeroDocumento.textContent = empleado.numeroIdentificacion;
    nombreEmpleado.textContent = empleado.nombreEmpleado;
    areaTrabajo.textContent = empleado.areaTrabajo;
    numeroCelular.textContent = empleado.telefonoEmpleado;
    correo.textContent = empleado.correoEmpleado;
    ciudad.textContent = empleado.ciudad;
  })

ObtnerPolizasYBeneficos(urlPolizas)
  .then(poliza => {
    const polizas = poliza.map(data => {
      return { nombre: data.nombrePoliza, id: data.id }
    })

    CrearOpcionesPolizas(polizas, selectPoliza);
  })

selectPoliza.addEventListener('change', (e) => {
  let polizaId = e.target.value

  ObtnerPolizasYBeneficos(urlBeneficos(polizaId))
    .then(proveedores => {

      const beneficios = proveedores[0].beneficios.map(data => {
        return { descripcion: data.descripcionBeneficio, id: data.id }
      })

      CrearOpcionesBeneficios(beneficios, selectBeneficio)
    })


});

formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  const polizaId = document.getElementById('polizas').value;
  const beneficioId = document.getElementById('beneficios').value;
  const fecha = new Date();
  const fechaFormato = fecha.toISOString().split('T')[0];


  const solicitud = {
    empleado: {
      id: empleadoId
    },
    beneficio: {
      id: beneficioId
    },
    fechaSolicitud: fechaFormato,
    estadoSolicitud: "En Proceso",
    descripcionSolicitud: '',
    comentarioSolicitud: ''
  }

  EnviarSolicitud(urlSolicitud, solicitud)
  // console.log(solicitud) // Esta data se debe enviar con un post a empleadoBeneficio

  Swal.fire({
    title: "Benefico",
    text: "Ha Seleccionado su Benefico Correctamente",
    icon: "success",
    confirmButtonText: "Ok"
  })


})

verMisSolicitudes.addEventListener('click',() =>{
  window.location.href = `/src/views/vistas_HU03/vista_HU03.html?id=${empleadoId}`
})
