package com.example.prueballaves.modelos;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Poliza {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tipoPoliza;
    private String nombrePoliza;
    private String descripcionPoliza;

    @OneToMany(mappedBy = "poliza")
    @JsonManagedReference
    private List<Proveedor> proveedores;

    public Poliza() {
    }

    public Poliza(Long id, String tipoPoliza, String nombrePoliza, String descripcionPoliza, List<Proveedor> proveedores) {
        this.id = id;
        this.tipoPoliza = tipoPoliza;
        this.nombrePoliza = nombrePoliza;
        this.descripcionPoliza = descripcionPoliza;
        this.proveedores = proveedores;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipoPoliza() {
        return tipoPoliza;
    }

    public void setTipoPoliza(String tipoPoliza) {
        this.tipoPoliza = tipoPoliza;
    }

    public String getNombrePoliza() {
        return nombrePoliza;
    }

    public void setNombrePoliza(String nombrePoliza) {
        this.nombrePoliza = nombrePoliza;
    }

    public String getDescripcionPoliza() {
        return descripcionPoliza;
    }

    public void setDescripcionPoliza(String descripcionPoliza) {
        this.descripcionPoliza = descripcionPoliza;
    }

    public List<Proveedor> getProveedores() {
        return proveedores;
    }

    public void setProveedores(List<Proveedor> proveedores) {
        this.proveedores = proveedores;
    }
}
