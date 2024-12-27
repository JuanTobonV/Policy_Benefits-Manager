export async function consultarBeneficios(){
    const urlSolicitud = "http://localhost:8080/api/empleadoBeneficio"

    let peticion = {
        method: "GET"
    }

    let respuestaInicial = await fetch(urlSolicitud,peticion)
    let respuestaFinal = await respuestaInicial.json()

    return respuestaFinal;
}