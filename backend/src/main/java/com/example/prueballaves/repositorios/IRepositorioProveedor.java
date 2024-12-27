package com.example.prueballaves.repositorios;

import com.example.prueballaves.modelos.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRepositorioProveedor extends JpaRepository<Proveedor,Long> {

    @Query("SELECT p FROM Proveedor p WHERE p.poliza.id = :polizaId")
    List<Proveedor> findProveedoresByPolizaId(@Param("polizaId") Long polizaId);
}
