package com.boutique.commons.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * DTO de entrada para crear/actualizar usuarios de la tabla usuarios_oauth
 */
public record UsuariosRequest(
    
    @NotBlank(message = "El username no puede estar vacío")
    @Size(min = 3, max = 50, message = "El username debe tener entre 3 y 50 caracteres")
    String username,

    @NotBlank(message = "El password no puede estar vacío")
    @Size(min = 6, max = 255, message = "El password debe tener entre 6 y 255 caracteres")
    String password

) {}
