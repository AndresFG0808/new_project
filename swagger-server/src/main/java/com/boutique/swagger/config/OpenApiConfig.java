package com.boutique.swagger.config;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;

/**
 * Configuración centralizada de OpenAPI/Swagger para la plataforma Boutique.
 * - Muestra autenticación Bearer Token JWT
 * - Agrega múltiples servidores (microservicios) desde servers.yml
 */
@Configuration
public class OpenApiConfig {

    @Autowired
    private ServersProperties serversProperties;

    @Bean
    public OpenAPI customOpenAPI() {
        OpenAPI openAPI = new OpenAPI()
                .info(new Info()
                        .title("Boutique Platform API")
                        .version("v1.0")
                        .description("API centralizada con acceso a todos los microservicios")
                )
                .components(new Components()
                        .addSecuritySchemes("bearer-jwt",
                                new SecurityScheme()
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")
                                        .description("Token JWT obtenido del Authorization Server")
                        )
                )
                .addSecurityItem(new SecurityRequirement().addList("bearer-jwt"));

        // Agregar servidores desde la configuración
        if (serversProperties != null && serversProperties.getServers() != null) {
            openAPI.setServers(
                serversProperties.getServers()
                    .stream()
                    .map(s -> new Server()
                            .url(s.getUrl())
                            .description(s.getDescription())
                    )
                    .collect(Collectors.toList())
            );
        }

        return openAPI;
    }
}
