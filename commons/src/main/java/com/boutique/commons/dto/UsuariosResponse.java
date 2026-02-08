package com.boutique.commons.dto;

/**
 * DTO de salida para responder con datos de usuarios de la tabla usuarios_oauth
 */
public record UsuariosResponse(
    Long id,
    String username
) {}
