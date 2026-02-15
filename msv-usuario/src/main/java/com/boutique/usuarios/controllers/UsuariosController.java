package com.boutique.usuarios.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boutique.usuarios.services.UsuarioService;
import com.boutique.commons.controllers.CommonController;
import com.boutique.commons.dto.UsuariosRequest;
import com.boutique.commons.dto.UsuariosResponse;

@RestController
@RequiredArgsConstructor
@RequestMapping("/usuarios")
public class UsuariosController extends CommonController<UsuariosRequest, UsuariosResponse, UsuarioService> {
    
    public UsuariosController(UsuarioService service) {
        super(service);
    }
}
