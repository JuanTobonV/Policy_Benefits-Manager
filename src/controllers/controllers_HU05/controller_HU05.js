export async function EnviarBeneficio(url,data) {
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
        return responseData;
    } catch (error) {
        console.error(error)
    }
}

export async function EliminarBeneficio(url, id) {
    try {
        const option = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // Agregar el ID en la URL para identificar el registro que se eliminará
        const response = await fetch(`${url}/${id}`, option);
        
        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error al eliminar el beneficio: ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: error.message };
    }
}


export async function ObtnerPolizas (url){
    const option = {
        method:"GET"
    }

    const response = await fetch(url,option)
    const data = await response.json()

    return data
}

