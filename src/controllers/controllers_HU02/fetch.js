export async function ObtnerPolizasYBeneficos (url){
    const option = {
        method:"GET"
    }

    const response = await fetch(url,option)
    const data = await response.json()

    return data
}

export async function EnviarSolicitud(url,data) {
    try {
        const option = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }
        
        const response = await fetch(url,option)
        const responseData = await response.json()
    
       console.log(responseData)
    } catch (error) {
        console.error(error)
    }
}