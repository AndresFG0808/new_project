package com.boutique.usuarios.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Configuración de PasswordEncoder para el microservicio de usuarios.
 * Se usa en UsuarioServiceImpl para encriptar contraseñas.
 */
@Configuration
public class PasswordEncoderConfig {

    /**
     * Bean de PasswordEncoder usando BCrypt.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
