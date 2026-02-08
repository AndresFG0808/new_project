package com.boutique.usuarios.mappers;

import org.springframework.stereotype.Component;

import com.boutique.usuarios.entities.Usuario;
import com.boutique.commons.dto.UsuariosRequest;
import com.boutique.commons.dto.UsuariosResponse;
import com.boutique.commons.mappers.CommonMapper;

/**
 * Mapper para convertir entre:
 *  - UsuariosRequest (RQ)  -> Usuario (E)
 *  - Usuario (E)           -> UsuariosResponse (RS)
 */
@Component
public class UsuarioMapper extends CommonMapper<UsuariosRequest, UsuariosResponse, Usuario> {

    /**
     * Convierte el DTO de entrada (UsuariosRequest) a la entidad JPA (Usuario).
     */
    @Override
    public Usuario requestToEntity(UsuariosRequest request) {
        if (request == null) {
            return null;
        }
        Usuario usuario = new Usuario();
        usuario.setUsername(request.username());
        usuario.setPassword(request.password());
        return usuario;
    }

    /**
     * Convierte la entidad JPA (Usuario) al DTO de salida (UsuariosResponse).
     * Nota: NO incluye el password en la respuesta por seguridad.
     */
    @Override
    public UsuariosResponse entityToResponse(Usuario entity) {
        if (entity == null) {
            return null;
        }
        return new UsuariosResponse(entity.getId(), entity.getUsername());
    }
}