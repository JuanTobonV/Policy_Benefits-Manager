package com.example.prueballaves.repositorios;

import com.example.prueballaves.llave.EmpleadoPolizaLlave;
import com.example.prueballaves.modelos.EmpleadoPoliza;
import com.example.prueballaves.modelos.Poliza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRepositorioEmpleadoPoliza extends JpaRepository<EmpleadoPoliza, EmpleadoPolizaLlave> {

    // query que hace un inner join entra empleadoPoliza y poliza y trae solo las polizas asociadas a un empleadoId
    @Query("SELECT ep.poliza FROM EmpleadoPoliza ep WHERE ep.empleado.id = :empleadoId")
    // query personalizado    @Param
    List<Poliza> findPolizasByEmpleadoId(@Param("empleadoId") Long empleadoId);

    /*
    * @Param
    *
    * Qué hace:
      En este caso, Spring Data JPA asocia el valor de la variable empleadoId
      con el parámetro :empleadoId en la consulta JPQL.

      Ejemplo de llamada: Cuando llamas al método findPolizasByEmpleadoId(123L)
      el valor 123L se asigna al parámetro :empleadoId de la consulta JPQL.
    *
    *
    * */
}
