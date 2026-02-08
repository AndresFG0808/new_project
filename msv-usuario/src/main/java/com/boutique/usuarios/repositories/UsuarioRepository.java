package com.boutique.usuarios.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.boutique.usuarios.entities.Usuario;

/**
 * Repositorio JPA para la entidad Usuario (tabla usuarios_oauth).
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    /**
     * Busca un usuario por su username.
     */
    Optional<Usuario> findByUsername(String username);

    /**
     * Verifica si existe un usuario con el username especificado.
     */
    boolean existsByUsername(String username);
}
