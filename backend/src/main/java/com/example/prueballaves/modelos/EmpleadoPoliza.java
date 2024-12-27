package com.example.prueballaves.modelos;

import com.example.prueballaves.llave.EmpleadoPolizaLlave;
import jakarta.persistence.*;

@Entity
@IdClass(EmpleadoPolizaLlave.class)
public class EmpleadoPoliza {

    @Id
    @ManyToOne
    @JoinColumn(name = "id_empleado", referencedColumnName = "id")
    private Empleado empleado;

    @Id
    @ManyToOne
    @JoinColumn(name = "id_poliza", referencedColumnName = "id")
    private Poliza poliza;


    public EmpleadoPoliza() {
    }

    public EmpleadoPoliza(Empleado empleado, Poliza poliza) {
        this.empleado = empleado;
        this.poliza = poliza;
    }

    public Empleado getEmpleado() {
        return empleado;
    }

    public void setEmpleado(Empleado empleado) {
        this.empleado = empleado;
    }

    public Poliza getPoliza() {
        return poliza;
    }

    public void setPoliza(Poliza poliza) {
        this.poliza = poliza;
    }
}
