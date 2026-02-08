package com.boutique.swagger.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Propiedades para leer la configuración de servidores desde application.yml
 * Mapea la estructura: app.swagger.servers
 */
@Component
@ConfigurationProperties(prefix = "app.swagger")
public class ServersProperties {

    private List<ServerInfo> servers = new ArrayList<>();

    public List<ServerInfo> getServers() {
        return servers;
    }

    public void setServers(List<ServerInfo> servers) {
        this.servers = servers;
    }

    public static class ServerInfo {
        private String name;
        private String url;
        private String description;

        public ServerInfo() {
        }

        public ServerInfo(String name, String url, String description) {
            this.name = name;
            this.url = url;
            this.description = description;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }
    }
}
