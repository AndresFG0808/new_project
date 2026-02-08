# Swagger Server - Configuración Centralizada de Documentación

Este módulo centraliza toda la configuración de Swagger/OpenAPI para los microservicios.

## ¿Qué contiene?

- **OpenApiConfig**: Configuración de OpenAPI con autenticación Bearer JWT
- **SwaggerAutoOpen**: Abre automáticamente Swagger en el navegador al iniciar

## Cómo usar en otros microservicios

### 1. Agregar como dependencia en `pom.xml`:

```xml
<dependency>
    <groupId>com.boutique</groupId>
    <artifactId>swagger-server</artifactId>
    <version>0.0.1-SNAPSHOT</version>
</dependency>
```

### 2. Agregar `springdoc-openapi` (si no lo heredas de swagger-server):

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.3.0</version>
</dependency>
```

### 3. Listo!

El resto se configura automáticamente a través de `@ComponentScan` y las anotaciones de Spring.

## Puertos

- **Swagger Server** (si corre como servicio independiente): `8082`
- **MSV Usuario**: `8081` → Accede a swagger en `http://localhost:8081/swagger-ui.html`
- **Authorization Server**: `9000`
- **Eureka Server**: `8761`

## Notas

- Cada microservicio seguirá teniendo su propio Swagger en su puerto
- La documentación se genera automáticamente desde los controladores
- Los tokens JWT se pueden copiar desde el Authorization Server
