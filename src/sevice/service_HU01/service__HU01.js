export async function consultarEmpleados(URL){

    let peticion = {
        method: "GET"
    }

    let respuestaInicial = await fetch(URL,peticion)
    let respuestaFinal = await respuestaInicial.json()

    return respuestaFinal;
}