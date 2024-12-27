package com.example.prueballaves.llave;

import java.io.Serializable;

public class EmpleadoBeneficioLlave implements Serializable {

    private Long empleado;
    private Long beneficio;

    public EmpleadoBeneficioLlave() {
    }

    public EmpleadoBeneficioLlave(Long empelado, Long beneficio) {
        this.empleado = empelado;
        this.beneficio = beneficio;
    }

    public Long getEmpelado() {
        return empleado;
    }

    public void setEmpelado(Long empelado) {
        this.empleado = empelado;
    }

    public Long getBeneficio() {
        return beneficio;
    }

    public void setBeneficio(Long beneficio) {
        this.beneficio = beneficio;
    }
}
