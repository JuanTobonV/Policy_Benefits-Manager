package com.example.prueballaves.servicios;

import com.example.prueballaves.modelos.Poliza;
import com.example.prueballaves.repositorios.IRepositorioEmpleadoPoliza;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoPolizaServicio {

    @Autowired
    IRepositorioEmpleadoPoliza iRepositorioEmpleadoPoliza;

    public List<Poliza> obtenerPolizasDeEmpleado(Long empleadoId) {
        return iRepositorioEmpleadoPoliza.findPolizasByEmpleadoId(empleadoId);
    }
}
