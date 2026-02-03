# Boutique Microservices

Sistema de microservicios basado en Spring Boot con Eureka Server, Authorization Server OAuth2 y módulo Commons compartido.

## 📋 Estructura del Proyecto

```
example/
├── commons/                    # Módulo compartido con dependencias comunes
│   ├── src/main/java/com/boutique/commons/
│   │   └── documentations/     # Configuración de Swagger
│   └── pom.xml
├── eureka-server/              # Servidor Eureka (Service Registry)
│   ├── src/main/java/com/boutique/eurekaserver/
│   └── pom.xml
├── authorization-server/       # Servidor OAuth2 Authorization
│   ├── src/main/java/com/boutique/authorization/
│   ├── src/main/resources/application.yml
│   └── pom.xml
└── pom.xml                    # POM padre con versiones compartidas
```

## 🚀 Funcionalidades

- **Eureka Server**: Registro y descubrimiento de servicios en el puerto 8761
- **Authorization Server**: Servidor OAuth2/OIDC en el puerto 9000
- **Swagger UI**: Documentación interactiva con auto-apertura en navegador
- **PostgreSQL**: Base de datos con esquema Boutique auto-creado
- **Spring Security**: Configuración segura con cadenas de filtros por prioridad

## 🔧 Requisitos

- JDK 17+
- Maven 3.8+
- PostgreSQL 12+

## ⚙️ Configuración

### Variables de Entorno Requeridas

```bash
BOUTIQUE_DB_URL=jdbc:postgresql://localhost:5432/boutique
BOUTIQUE_DB_USER=postgres
BOUTIQUE_DB_PASS=your_password
```

### Iniciar el Proyecto

```bash
# Desde la raíz del proyecto
mvn clean install

# Iniciar Eureka Server
cd eureka-server
mvn spring-boot:run

# En otra terminal, iniciar Authorization Server
cd authorization-server
mvn spring-boot:run
```

## 📡 Endpoints principales

- **Eureka Dashboard**: http://localhost:8761
- **Swagger Authorization Server**: http://localhost:9000/swagger-ui.html
- **Swagger Eureka Server**: http://localhost:8761/swagger-ui.html
- **OAuth2 Token Endpoint**: http://localhost:9000/oauth2/token

## 📦 Dependencias Principales

- Spring Boot 3.5.4 (Authorization Server), 3.2.6 (Eureka Server)
- Spring Cloud 2025.0.0 (Authorization Server), 2023.0.0 (Eureka Server)
- Spring Security OAuth2 Authorization Server
- Spring Data JPA + Hibernate
- PostgreSQL Driver
- SpringDoc OpenAPI (Swagger) 2.3.0

## 🔐 Características de Seguridad

- OAuth2 Authorization Code Flow
- OpenID Connect (OIDC) 1.0
- JWT Tokens
- Role-based Access Control (RBAC)
- Swagger/OpenAPI público pero protegido en endpoints principales

## 🎯 Desarrollo

### Hot Reload Desactivado
DevTools está configurado con `restart.enabled: false` para evitar reinicios automáticos al guardar cambios.

### Swagger Auto-Open
El servidor abre automáticamente Swagger en la primera ejecución de cada puerto. En reinicios posteriores, intenta recargar la página existente en lugar de abrir una nueva pestaña.

## 📝 License

MIT

---

**Última actualización**: Febrero 2026
