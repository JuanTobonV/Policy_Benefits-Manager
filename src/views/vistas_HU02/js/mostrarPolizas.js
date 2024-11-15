import { beneficios } from "../../../data/beneficios.js";

function MostrarBeneficioPoliza(nombrePoliza,etiqueta){
    const benficioPoliza = beneficios[nombrePoliza]

    etiqueta.innerHTML = '<option value="">Selecciona un beneficio</option>';


    CrearOpciones(benficioPoliza,etiqueta)
}

function CrearOpciones (polizas,etiqueta){
    let option;
    polizas.forEach(poliza => {
        const option = document.createElement('option')
        option.textContent = poliza
        option.value = poliza
        etiqueta.append(option)
    });
}

export {CrearOpciones,MostrarBeneficioPoliza}
