package com.boutique.commons.services;

import java.util.List;

/**
 * Interfaz genérica de servicio con operaciones CRUD básicas.
 *
 * RQ -> tipo del DTO de entrada (request), p. ej. UsuariosRequest
 * RS -> tipo del DTO de salida (response), p. ej. UsuariosResponse
 *
 * NOTAS:
 * - Se deja la lógica concreta a la implementación del microservicio
 * - Se recomienda que las implementaciones lancen excepciones de negocio
 *   para que el GlobalExceptionHandler las transforme en respuestas HTTP adecuadas.
 */
public interface CommonService<RQ, RS> {

    /**
     * Lista todos los recursos.
     * 
     * @return List<RS>: lista de DTOs de respuesta (puede estar vacía si no hay datos).
     */
    List<RS> listar();

    /**
     * Inserta un nuevo recurso a partir del DTO de entrada.
     *
     * @param request DTO validado recibido en el controlador
     * @return RS: DTO de respuesta con los datos guardados (incluyendo id generado).
     */
    RS insertar(RQ request);

    /**
     * Actualiza un recurso existente identificado por id.
     *
     * @param request DTO con nuevos valores (validado).
     * @param id identificador del recurso a actualizar.
     * @return RS: DTO con la entidad actualizada.
     */
    RS actualizar(RQ request, Long id);

    /**
     * Elimina un recurso por id.
     *
     * @param id identificador del recurso a eliminar.
     * @return RS: DTO del recurso eliminado.
     */
    RS eliminar(Long id);

    /**
     * Obtiene un recurso por su id.
     *
     * @param id identificador del recurso.
     * @return RS: DTO con los datos del recurso.
     */
    RS obtenerPorId(Long id);
}
