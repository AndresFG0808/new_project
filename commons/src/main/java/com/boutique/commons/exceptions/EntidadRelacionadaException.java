package com.boutique.commons.exceptions;

/**
 * Excepción personalizada para indicar que una entidad tiene relaciones
 * que impiden su eliminación o modificación.
 */
public class EntidadRelacionadaException extends RuntimeException {

    public EntidadRelacionadaException(String mensaje) {
        super(mensaje);
    }

    public EntidadRelacionadaException(String mensaje, Throwable cause) {
        super(mensaje, cause);
    }
}
