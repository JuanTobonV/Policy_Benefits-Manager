export function obtnerIdUrl (){
    const queryString = window.location.search; 
    const queryParams = new URLSearchParams(queryString);
    const empleadoId = queryParams.get("id");

    return empleadoId
}
