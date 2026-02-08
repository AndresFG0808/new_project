package com.boutique.commons.controllers;

import java.util.Map;
import java.util.NoSuchElementException;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.boutique.commons.exceptions.EntidadRelacionadaException;

import jakarta.validation.ConstraintViolationException;

/**
 * Manejo global de excepciones para todos los controladores REST.
 * Convierte excepciones comunes en respuestas HTTP adecuadas.
 * 
 * NOTA: No usar @RestControllerAdvice aquí en commons, ya que causa
 * conflicto con springdoc-openapi. Cada microservicio debe crear su
 * propio GlobalExceptionHandler con la anotación si lo necesita.
 */
// @RestControllerAdvice
public class GlobalExceptionHandler {
    
    private static final Logger LOGGER = Logger.getLogger(GlobalExceptionHandler.class.getName());

    /**
     * Maneja violaciones de constraints de validación (anotaciones @NotBlank, @Size, etc.)
     */
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<Map<String, Object>> handleConstraintViolationException(
            ConstraintViolationException e) {
        LOGGER.log(Level.WARNING, "Violación de restricción: " + e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(
            "code", HttpStatus.BAD_REQUEST.value(),
            "message", "Violación de restricción: " + e.getMessage()
        ));
    }

    /**
     * Maneja errores de validación en RequestBody (@Valid)
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {
        LOGGER.log(Level.WARNING, "Error de validación: " + e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(
            "code", HttpStatus.BAD_REQUEST.value(),
            "message", "Error de validación: " + e.getBindingResult().getFieldError().getDefaultMessage()
        ));
    }

    /**
     * Maneja excepciones cuando no se encuentra un recurso
     */
    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<Map<String, Object>> handleNoSuchElementException(
            NoSuchElementException e) {
        LOGGER.log(Level.WARNING, "Recurso no encontrado: " + e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of(
            "code", HttpStatus.NOT_FOUND.value(),
            "message", "Recurso no encontrado"
        ));
    }

    /**
     * Maneja violaciones de integridad de datos en la BD
     */
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Map<String, Object>> handleDataIntegrityViolationException(
            DataIntegrityViolationException e) {
        LOGGER.log(Level.SEVERE, "Violación de integridad: " + e.getCause());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of(
            "code", HttpStatus.CONFLICT.value(),
            "message", "Violación de restricción de integridad: " + e.getMessage()
        ));
    }

    /**
     * Maneja excepciones de entidades relacionadas
     */
    @ExceptionHandler(EntidadRelacionadaException.class)
    public ResponseEntity<Map<String, Object>> handleEntidadRelacionadaException(
            EntidadRelacionadaException e) {
        LOGGER.log(Level.WARNING, "Entidad relacionada: " + e.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of(
            "code", HttpStatus.CONFLICT.value(),
            "message", e.getMessage()
        ));
    }
}
