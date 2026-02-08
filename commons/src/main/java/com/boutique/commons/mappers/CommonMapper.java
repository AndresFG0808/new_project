package com.boutique.commons.mappers;

/**
 * Mapper genérico base para convertir entre:
 *  - RQ : Tipo de objeto request (DTO entrante, p.ej. UsuariosRequest)
 *  - RS : Tipo de objeto response (DTO de salida, p.ej. UsuariosResponse)
 *  - E  : Tipo de entidad JPA (p.ej. Usuario)
 *
 * ¿Por qué usar clase abstracta?
 * - Permite offcer métodos utilitarios comunes (implementados) además de los métodos abstractos
 * - Facilita mantener compatibilidad si se añaden utilidades compartidas
 *
 * Ejemplo de tipos:
 *   CommonMapper<UsuariosRequest, UsuariosResponse, Usuario>
 */
public abstract class CommonMapper<RQ, RS, E> {

    /**
     * Convierte una entidad (E) a su DTO de respuesta (RS).
     *
     * @param entity la entidad JPA que quieres transformar.
     * @return RS: el DTO preparado para la respuesta JSON.
     */
    public abstract RS entityToResponse(E entity);

    /**
     * Convierte un DTO de request (RQ) a la entidad (E).
     *
     * @param request el DTO de entrada que quieres convertir a entidad.
     * @return E: la entidad JPA lista para persistir.
     */
    public abstract E requestToEntity(RQ request);
}
