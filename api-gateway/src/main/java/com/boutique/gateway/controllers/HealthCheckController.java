package com.boutique.gateway.controllers;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boutique.gateway.dto.HealthCheckResponse;

/**
 * Controlador para verificar el estado del API Gateway
 */
@RestController
@RequestMapping("/health")
public class HealthCheckController {

    @GetMapping
    public ResponseEntity<HealthCheckResponse> healthCheck() {
        LocalDateTime ahora = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        
        HealthCheckResponse response = new HealthCheckResponse(
            "UP",
            "Servicio API Gateway funcionando correctamente",
            ahora.format(formatter),
            System.currentTimeMillis()
        );
        return ResponseEntity.ok(response);
    }
}
