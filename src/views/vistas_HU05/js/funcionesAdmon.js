function mostrarSelectorBeneficios(){
    const formularioBeneficios = document.getElementById('formularioBeneficios');
    let selectorPolizas = document.getElementById('selector-polizas-disponibles');
    let opcion = selectorPolizas.value;

    switch(opcion){
        case "0": 
            formularioBeneficios.style.display = "none";
        break;
        case "1":
            formularioBeneficios.style.display = "flex";    
        break;
        case "2":
            formularioBeneficios.style.display = "flex";    
        break;
        case "3": 
            formularioBeneficios.style.display = "flex";
        break;
        case "4":
            formularioBeneficios.style.display = "flex";
        break;
    }
}

function limpiarSelectores(){
    let selectores = ['selectorProveedor', 'selector-polizas-activas', 'selector-polizas-disponibles', 'selector-beneficios'];

    selectores.forEach(selectores => {
        document.getElementById(selectores).value = "0";
    })
}