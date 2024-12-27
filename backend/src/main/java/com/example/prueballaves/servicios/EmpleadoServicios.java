package com.example.prueballaves.servicios;


import com.example.prueballaves.modelos.Empleado;
import com.example.prueballaves.repositorios.IRepositorioEmpleado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoServicios {

    @Autowired
    IRepositorioEmpleado repositorioEmpleado;

    public List<Empleado> buscarEmpleado() throws Exception{
        try{
            return repositorioEmpleado.findAll();
        }catch (Exception error){
            throw new Exception(error.getMessage());
        }
    }
}
