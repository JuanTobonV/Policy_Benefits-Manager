package com.example.prueballaves.servicios;

import com.example.prueballaves.modelos.Poliza;
import com.example.prueballaves.repositorios.IRepositorioPoliza;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PolizaServicios {

    @Autowired
    IRepositorioPoliza iRepositorioPoliza;

    public Poliza registrarPoliza (Poliza datos) throws Exception{
        try {
            return iRepositorioPoliza.save(datos);
        }catch (Exception error){
            throw new Exception(error.getMessage());
        }
    }

    public List<Poliza> obtenerPoliza(){
        return iRepositorioPoliza.findAll();
    }
}
