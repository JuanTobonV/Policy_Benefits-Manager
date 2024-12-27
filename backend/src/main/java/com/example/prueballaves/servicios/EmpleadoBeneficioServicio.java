package com.example.prueballaves.servicios;

import com.example.prueballaves.llave.EmpleadoBeneficioLlave;
import com.example.prueballaves.modelos.EmpleadoBeneficio;
import com.example.prueballaves.repositorios.IRepositorioEmpleadoBeneficio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoBeneficioServicio {

    @Autowired
    IRepositorioEmpleadoBeneficio iRepositorioEmpleadoBeneficio;

    public EmpleadoBeneficio guardarSolicitudes (EmpleadoBeneficio datos){
        return iRepositorioEmpleadoBeneficio.save(datos);
    }

    public EmpleadoBeneficio buscarSolicitudById(Long beneficioId,Long empleadoId,EmpleadoBeneficio modicicador){
        EmpleadoBeneficioLlave llaves = new EmpleadoBeneficioLlave(beneficioId,empleadoId);
        EmpleadoBeneficio existe = iRepositorioEmpleadoBeneficio.findById(llaves)
        .orElseThrow(() -> new RuntimeException("Entidad no encontrada"));

        if(modicicador.getComentarioSolicitud() !=null){
            existe.setComentarioSolicitud(modicicador.getComentarioSolicitud());
        }if(modicicador.getEstadoSolicitud() !=null){
            existe.setEstadoSolicitud(modicicador.getEstadoSolicitud());
        }

        return iRepositorioEmpleadoBeneficio.save(existe);
    }

    public List<EmpleadoBeneficio> buscarBeneficioEmpleado() throws Exception{
        try {
            return iRepositorioEmpleadoBeneficio.findAll();
        }catch (Exception error){
            throw new Exception(error.getMessage());
        }
    }
}
