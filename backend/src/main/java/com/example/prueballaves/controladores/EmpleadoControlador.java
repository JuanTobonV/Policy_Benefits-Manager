package com.example.prueballaves.controladores;


import com.example.prueballaves.servicios.EmpleadoServicios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/empleado")
public class EmpleadoControlador {

    @Autowired
    EmpleadoServicios empleadoServicio;

    @GetMapping
    public ResponseEntity<?> buscarTodo(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(empleadoServicio.buscarEmpleado());
        }catch (Exception error){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error.getMessage());
        }
    }

}
