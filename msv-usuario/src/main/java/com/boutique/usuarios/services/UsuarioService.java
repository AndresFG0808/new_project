package com.boutique.usuarios.services;

import com.boutique.commons.dto.UsuariosRequest;
import com.boutique.commons.dto.UsuariosResponse;
import com.boutique.commons.services.CommonService;

/**
 * Interfaz del servicio de Usuarios.
 * 
 * Extiende CommonService fijando los tipos:
 *     RQ = UsuariosRequest  (datos entrantes desde el controlador)
 *     RS = UsuariosResponse (datos salientes que devuelve el controlador)
 */
public interface UsuarioService extends CommonService<UsuariosRequest, UsuariosResponse> {

}
