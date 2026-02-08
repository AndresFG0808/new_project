package com.boutique.commons.config;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/**
 * Configuración de seguridad con OAUTH2 JWT para validar tokens.
 * Solo se carga si spring.security.oauth2.resourceserver.jwt.issuer-uri está configurada.
 * Todos los microservicios que heredan de commons automáticamente
 * tendrán protección con JWT si lo configuran.
 */
@Configuration
@EnableWebSecurity
@ConditionalOnProperty(
    name = "spring.security.oauth2.resourceserver.jwt.issuer-uri",
    matchIfMissing = false
)
public class SecurityConfig {

    /**
     * Configuración de seguridad que requiere JWT en los endpoints.
     * Excluye el acceso a Swagger y health check.
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .cors().and()
            .authorizeHttpRequests(authz -> authz
                // Permitir acceso sin JWT a Swagger/OpenAPI
                .requestMatchers(
                    "/swagger-ui/**", 
                    "/swagger-ui.html",
                    "/swagger-ui/index.html",
                    "/v3/api-docs",
                    "/v3/api-docs.yaml",
                    "/v3/api-docs/**",
                    "/swagger-resources/**"
                ).permitAll()
                // Permitir health check sin JWT
                .requestMatchers("/actuator/health").permitAll()
                // Todos los demás endpoints requieren JWT válido
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter()))
            )
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();
    }

    /**
     * Converter para mapear JWT a Authentication.
     * Extrae los claims del JWT para crear la autenticación.
     */
    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(jwt -> Collections.emptyList());
        return converter;
    }

    /**
     * Configuración de CORS para permitir solicitudes desde otros dominios.
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(false);
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
