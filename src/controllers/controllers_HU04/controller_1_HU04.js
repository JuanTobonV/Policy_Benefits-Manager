export async function FetchEmpleadoSolicitud (url){
    const option = {
        method:"GET"
    }

    const response = await fetch(url,option)
    const data = await response.json()

    return data
}

export async function FetchModificarEstadoSolicitud(url,modificador){
    const option = {
        method:"PATCH",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(modificador)
    }

    const response = await fetch(url,option)
    const data = await response.json()

    return data
}