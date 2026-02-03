package com.boutique.authorization.services;

import java.util.Set;

import com.boutique.authorization.dto.UsuarioRequest;
import com.boutique.authorization.dto.UsuarioResponse;

public interface UsuarioService {

	Set<UsuarioResponse> listarUsuarios();

	UsuarioResponse crearUsuario(UsuarioRequest request);
	
	UsuarioResponse eliminarUsuario(String username);
}
