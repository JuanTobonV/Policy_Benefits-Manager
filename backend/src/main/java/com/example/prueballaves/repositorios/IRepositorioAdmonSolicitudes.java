package com.example.prueballaves.repositorios;

import com.example.prueballaves.llave.EmpleadoBeneficioLlave;
import com.example.prueballaves.modelos.EmpleadoBeneficio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositorioAdmonSolicitudes extends JpaRepository<EmpleadoBeneficio, EmpleadoBeneficioLlave> {

}