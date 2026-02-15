package com.boutique.gateway.dto;

/**
 * DTO de respuesta para el health check del API Gateway
 */
public record HealthCheckResponse(
    String status,
    String message,
    String timestamp,
    long timestampMillis
) {}
