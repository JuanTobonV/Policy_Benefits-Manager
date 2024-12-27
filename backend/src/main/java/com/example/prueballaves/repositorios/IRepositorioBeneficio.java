package com.example.prueballaves.repositorios;

import com.example.prueballaves.modelos.Beneficio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositorioBeneficio extends JpaRepository<Beneficio,Long> {

}
