package com.boutique.commons.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import jakarta.servlet.http.HttpServletRequest;

/**
 * Configuración para Feign clients.
 * Propaga el token JWT desde la solicitud actual a las llamadas Feign.
 */
@Configuration
public class FeignClientConfig {
    
    /**
     * Bean que intercepta las solicitudes Feign para incluir el header Authorization.
     * De esta forma, los tokens se propagan a través de los microservicios.
     */
    @Bean
    RequestInterceptor requestInterceptor() {
        return (RequestTemplate template) -> {
            ServletRequestAttributes attributes = 
                    (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            
            if(attributes != null) {
                HttpServletRequest request = attributes.getRequest();
                String authorizationHeader = request.getHeader("Authorization");
                if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                    template.header("Authorization", authorizationHeader);
                }
            }
        };
    }
}
