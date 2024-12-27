package com.example.prueballaves.llave;


import java.io.Serializable;

public class EmpleadoPolizaLlave implements Serializable {
    private Long empleado;
    private Long poliza;

    public EmpleadoPolizaLlave() {
    }

    public EmpleadoPolizaLlave(Long empleado, Long poliza) {
        this.empleado = empleado;
        this.poliza = poliza;
    }

    public Long getEmpleado() {
        return empleado;
    }

    public void setEmpleado(Long empleado) {
        this.empleado = empleado;
    }

    public Long getPoliza() {
        return poliza;
    }

    public void setPoliza(Long poliza) {
        this.poliza = poliza;
    }
}
