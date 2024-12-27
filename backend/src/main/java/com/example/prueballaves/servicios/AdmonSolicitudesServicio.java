package com.example.prueballaves.servicios;

import com.example.prueballaves.modelos.EmpleadoBeneficio;
import com.example.prueballaves.repositorios.IRepositorioAdmonSolicitudes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdmonSolicitudesServicio {
    @Autowired
    IRepositorioAdmonSolicitudes iRepositorioAdmonSolicitudes;

    public List<EmpleadoBeneficio> obtenerSolicitudes(){
        return iRepositorioAdmonSolicitudes.findAll();
    }

}
