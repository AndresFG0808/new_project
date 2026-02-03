package com.boutique.authorization.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.boutique.authorization.entities.Rol;

@Repository
public interface RolRepository extends JpaRepository<Rol, Long>{
	
	Optional<Rol> findByNombre(String nombre);
}
