package com.boutique.usuarios.services.impl;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boutique.commons.dto.UsuariosRequest;
import com.boutique.commons.dto.UsuariosResponse;
import com.boutique.commons.exceptions.EntidadRelacionadaException;
import com.boutique.usuarios.entities.Usuario;
import com.boutique.usuarios.mappers.UsuarioMapper;
import com.boutique.usuarios.repositories.UsuarioRepository;
import com.boutique.usuarios.services.UsuarioService;

/**
 * Implementación del servicio de Usuarios.
 * 
 * Gestiona la lógica CRUD de usuarios desde la tabla usuarios_oauth.
 */
@Service
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final UsuarioMapper usuarioMapper;
    private final PasswordEncoder passwordEncoder;

    public UsuarioServiceImpl(UsuarioRepository usuarioRepository, UsuarioMapper usuarioMapper,
                            PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.usuarioMapper = usuarioMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional(readOnly = true)
    public List<UsuariosResponse> listar() {
        return usuarioRepository.findAll().stream()
                .map(usuarioMapper::entityToResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public UsuariosResponse insertar(UsuariosRequest request) {
        // Validar que el username sea único
        if (usuarioRepository.existsByUsername(request.username())) {
            throw new EntidadRelacionadaException("El username ya está registrado");
        }

        Usuario entidad = usuarioMapper.requestToEntity(request);
        // Encriptar password
        entidad.setPassword(passwordEncoder.encode(request.password()));
        Usuario guardado = usuarioRepository.save(entidad);
        
        return usuarioMapper.entityToResponse(guardado);
    }

    @Override
    @Transactional
    public UsuariosResponse actualizar(UsuariosRequest request, Long id) {
        Usuario existente = usuarioRepository.findById(id)
                .orElseThrow(NoSuchElementException::new);

        // Verificar que no exista otro usuario con el mismo username
        usuarioRepository.findByUsername(request.username()).ifPresent(u -> {
            if (!u.getId().equals(id)) {
                throw new EntidadRelacionadaException("El username ya está registrado por otro usuario");
            }
        });

        // Actualizar campos
        existente.setUsername(request.username());
        existente.setPassword(passwordEncoder.encode(request.password()));

        Usuario actualizado = usuarioRepository.save(existente);
        return usuarioMapper.entityToResponse(actualizado);
    }

    @Override
    @Transactional
    public UsuariosResponse eliminar(Long id) {
        Usuario existente = usuarioRepository.findById(id)
                .orElseThrow(NoSuchElementException::new);

        usuarioRepository.deleteById(id);
        return usuarioMapper.entityToResponse(existente);
    }

    @Override
    @Transactional(readOnly = true)
    public UsuariosResponse obtenerPorId(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(NoSuchElementException::new);
        return usuarioMapper.entityToResponse(usuario);
    }
}