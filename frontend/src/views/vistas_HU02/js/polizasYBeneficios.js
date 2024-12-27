function CrearOpcionesPolizas (polizas,etiqueta){
    etiqueta.innerHTML = '<option value="">Selecciona una poliza</option>';
    let option;
    polizas.forEach(({nombre,id}) => {
        const option = document.createElement('option')
        option.textContent = nombre
        option.value = id
        etiqueta.append(option)
    });
}

function CrearOpcionesBeneficios (beneficios,etiqueta){
    etiqueta.innerHTML = '<option value="">Selecciona un beneficio</option>';
    let option;
    beneficios.forEach(({descripcion,id}) => {
        const option = document.createElement('option')
        option.textContent = descripcion
        option.value = id
        etiqueta.append(option)
    });
}

export {CrearOpcionesPolizas,CrearOpcionesBeneficios}
