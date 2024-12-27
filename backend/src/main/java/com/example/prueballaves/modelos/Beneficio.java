package com.example.prueballaves.modelos;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import org.springframework.http.converter.json.GsonBuilderUtils;

import java.time.LocalDate;

@Entity
public class Beneficio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descripcionBeneficio;
    private LocalDate fechaInicio;
    private LocalDate fechaFinal;


    @ManyToOne
    @JoinColumn(name = "id_proveedor",referencedColumnName = "id")
    @JsonBackReference
    private Proveedor proveedor;

    public Beneficio() {
    }

    public Beneficio(Long id, String descripcionBeneficio, LocalDate fechaInicio, LocalDate fechaFinal, Proveedor proveedor) {
        this.id = id;
        this.descripcionBeneficio = descripcionBeneficio;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.proveedor = proveedor;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcionBeneficio() {
        return descripcionBeneficio;
    }

    public void setDescripcionBeneficio(String descripcionBeneficio) {
        this.descripcionBeneficio = descripcionBeneficio;
    }

    public LocalDate getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public LocalDate getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(LocalDate fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public Proveedor getProveedor() {
        return proveedor;
    }

    public void setProveedor(Proveedor proveedor) {
        this.proveedor = proveedor;
    }
}
