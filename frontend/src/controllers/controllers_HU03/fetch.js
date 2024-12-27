export async function ObtenerBeneficiosEmpleados (){
    const URL = "http://localhost:8080/api/empleadoBeneficio"
    const option = {
        method:"GET"
    }

    const response = await fetch(URL,option)
    const data = await response.json()

    return data
}