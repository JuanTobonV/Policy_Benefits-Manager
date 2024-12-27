package com.example.prueballaves.servicios;

import com.example.prueballaves.modelos.Proveedor;
import com.example.prueballaves.repositorios.IRepositorioProveedor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProveedorServicio {

    @Autowired
    IRepositorioProveedor iRepositorioProveedor;

    public List<Proveedor> obtenerProveedoresPorPoliza(Long polizaId){
        return iRepositorioProveedor.findProveedoresByPolizaId(polizaId);
    }

    public List<Proveedor> obtenerProveedores(){
        return iRepositorioProveedor.findAll();
    }
}
