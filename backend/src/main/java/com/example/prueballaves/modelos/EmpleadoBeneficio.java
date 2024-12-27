package com.example.prueballaves.modelos;


import com.example.prueballaves.llave.EmpleadoBeneficioLlave;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@IdClass(EmpleadoBeneficioLlave.class)
public class EmpleadoBeneficio {
    @Id
    @ManyToOne
    @JoinColumn(name = "id_empleado", referencedColumnName = "id")
    private Empleado empleado;

    @Id
    @ManyToOne
    @JoinColumn(name = "id_beneficio", referencedColumnName = "id")
    private Beneficio beneficio;


    private LocalDate fechaSolicitud;
    private String estadoSolicitud="En Proceso";
    private String descripcionSolicitud;
    private String comentarioSolicitud;

    public EmpleadoBeneficio() {
    }

    public EmpleadoBeneficio(Empleado empleado, Beneficio beneficio, LocalDate fechaSolicitud, String estadoSolicitud, String descripcionSolicitud, String comentarioSolicitud) {
        this.empleado = empleado;
        this.beneficio = beneficio;
        this.fechaSolicitud = fechaSolicitud;
        this.estadoSolicitud = estadoSolicitud;
        this.descripcionSolicitud = descripcionSolicitud;
        this.comentarioSolicitud = comentarioSolicitud;
    }

    public Empleado getEmpleado() {
        return empleado;
    }

    public void setEmpleado(Empleado empleado) {
        this.empleado = empleado;
    }

    public Beneficio getBeneficio() {
        return beneficio;
    }

    public void setBeneficio(Beneficio beneficio) {
        this.beneficio = beneficio;
    }

    public LocalDate getFechaSolicitud() {
        return fechaSolicitud;
    }

    public void setFechaSolicitud(LocalDate fechaSolicitud) {
        this.fechaSolicitud = fechaSolicitud;
    }

    public String getEstadoSolicitud() {
        return estadoSolicitud;
    }

    public void setEstadoSolicitud(String estadoSolicitud) {
        this.estadoSolicitud = estadoSolicitud;
    }

    public String getDescripcionSolicitud() {
        return descripcionSolicitud;
    }

    public void setDescripcionSolicitud(String descripcionSolicitud) {
        this.descripcionSolicitud = descripcionSolicitud;
    }

    public String getComentarioSolicitud() {
        return comentarioSolicitud;
    }

    public void setComentarioSolicitud(String comentarioSolicitud) {
        this.comentarioSolicitud = comentarioSolicitud;
    }
}
