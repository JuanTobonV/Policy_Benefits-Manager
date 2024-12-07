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
       console.log(responseData)
    } catch (error) {
        console.error(error)
    }
}