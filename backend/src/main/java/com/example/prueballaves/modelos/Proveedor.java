package com.example.prueballaves.modelos;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Proveedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String razonSocial;
    private String tipoIdentificacion;
    private Long numeroIdentificacion;
    private String correoProveedor;
    private Long telefonoProveedor;
    private String direccionProveedor;
    private String ciudadProveedor;
    private String departamentoProveedor;
    private String paisProveedor;

    @OneToMany(mappedBy = "proveedor")
    @JsonManagedReference
    private List<Beneficio> beneficios;

    @ManyToOne
    @JoinColumn(name = "id_poliza", referencedColumnName = "id")
    @JsonBackReference
    private Poliza poliza;

    public Proveedor() {
    }

    public Proveedor(Long id, String razonSocial, String tipoIdentificacion, Long numeroIdentificacion, String correoProveedor, Long telefonoProveedor, String direccionProveedor, String ciudadProveedor, String departamentoProveedor, String paisProveedor, List<Beneficio> beneficios, Poliza poliza) {
        this.id = id;
        this.razonSocial = razonSocial;
        this.tipoIdentificacion = tipoIdentificacion;
        this.numeroIdentificacion = numeroIdentificacion;
        this.correoProveedor = correoProveedor;
        this.telefonoProveedor = telefonoProveedor;
        this.direccionProveedor = direccionProveedor;
        this.ciudadProveedor = ciudadProveedor;
        this.departamentoProveedor = departamentoProveedor;
        this.paisProveedor = paisProveedor;
        this.beneficios = beneficios;
        this.poliza = poliza;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRazonSocial() {
        return razonSocial;
    }

    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }

    public String getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(String tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }

    public Long getNumeroIdentificacion() {
        return numeroIdentificacion;
    }

    public void setNumeroIdentificacion(Long numeroIdentificacion) {
        this.numeroIdentificacion = numeroIdentificacion;
    }

    public String getCorreoProveedor() {
        return correoProveedor;
    }

    public void setCorreoProveedor(String correoProveedor) {
        this.correoProveedor = correoProveedor;
    }

    public Long getTelefonoProveedor() {
        return telefonoProveedor;
    }

    public void setTelefonoProveedor(Long telefonoProveedor) {
        this.telefonoProveedor = telefonoProveedor;
    }

    public String getDireccionProveedor() {
        return direccionProveedor;
    }

    public void setDireccionProveedor(String direccionProveedor) {
        this.direccionProveedor = direccionProveedor;
    }

    public String getCiudadProveedor() {
        return ciudadProveedor;
    }

    public void setCiudadProveedor(String ciudadProveedor) {
        this.ciudadProveedor = ciudadProveedor;
    }

    public String getDepartamentoProveedor() {
        return departamentoProveedor;
    }

    public void setDepartamentoProveedor(String departamentoProveedor) {
        this.departamentoProveedor = departamentoProveedor;
    }

    public String getPaisProveedor() {
        return paisProveedor;
    }

    public void setPaisProveedor(String paisProveedor) {
        this.paisProveedor = paisProveedor;
    }

    public List<Beneficio> getBeneficios() {
        return beneficios;
    }

    public void setBeneficios(List<Beneficio> beneficios) {
        this.beneficios = beneficios;
    }

    public Poliza getPoliza() {
        return poliza;
    }

    public void setPoliza(Poliza poliza) {
        this.poliza = poliza;
    }
}
