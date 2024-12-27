package com.example.prueballaves.repositorios;

import com.example.prueballaves.modelos.Poliza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositorioPoliza  extends JpaRepository<Poliza,Long> {

}
