package com.example.prueballaves.repositorios;

import com.example.prueballaves.modelos.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositorioEmpleado extends JpaRepository<Empleado, Long> {
}
