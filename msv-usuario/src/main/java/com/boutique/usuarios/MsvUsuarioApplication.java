package com.boutique.usuarios;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication(scanBasePackages = {"com.boutique.usuarios", "com.boutique.commons"})
@EnableFeignClients(basePackages = "com.boutique.usuarios")
@EnableDiscoveryClient
public class MsvUsuarioApplication {

    public static void main(String[] args) {
        SpringApplication.run(MsvUsuarioApplication.class, args);
    }
}
