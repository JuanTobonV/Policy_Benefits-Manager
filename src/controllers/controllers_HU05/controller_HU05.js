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
        // Configurar las opciones de la solicitud
        const options = {
            method: 'DELETE',
        };

        // Realizar la solicitud a la API
        const response = await fetch(`${url}/${id}`, options);

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error al eliminar el beneficio: ${response.statusText}`);
        }

        // Convertir la respuesta a JSON
        // const responseData = await response.json();
        // return responseData;

        const responseText = await response.text();
console.log("Respuesta del servidor:", responseText);


    } catch (error) {
        console.error('Error al eliminar el beneficio:', error);
        throw error;
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

