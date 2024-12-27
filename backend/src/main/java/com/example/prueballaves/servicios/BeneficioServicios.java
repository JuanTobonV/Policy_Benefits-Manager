package com.example.prueballaves.servicios;

import com.example.prueballaves.modelos.Beneficio;
import com.example.prueballaves.repositorios.IRepositorioBeneficio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BeneficioServicios {

    @Autowired
    IRepositorioBeneficio IRepositorioBeneficio;

    public Beneficio registrarBeneficio(Beneficio datosBeneficio) throws Exception{

        try{
            // guardar en la BBDD los datos del beneficio
            return IRepositorioBeneficio.save(datosBeneficio);
        }catch (Exception error){
            throw new Exception(error.getMessage());
        }

    }

    public List<Beneficio> obtenerBeneficioPorProveedor(){
        return IRepositorioBeneficio.findAll();
    }

    // servicio para eliminar

    public void eliminarBeneficio(Long id) {
        if (!IRepositorioBeneficio.existsById(id)) {
            throw new IllegalArgumentException("El beneficio con ID " + id + " no existe.");
        }
        IRepositorioBeneficio.deleteById(id);
    }

}

