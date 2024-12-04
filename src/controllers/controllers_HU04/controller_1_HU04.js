export async function FetchEmpleadoSolicitud (url){
    const option = {
        method:"GET"
    }

    const response = await fetch(url,option)
    const data = await response.json()

    return data
}