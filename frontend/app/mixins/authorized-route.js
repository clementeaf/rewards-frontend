import Ember from "ember";
import UsuarioServiceInjected from "./usuario-service-injected";
import NavigatorInjected from "./navigator-injected";

/**
 * Este mixin es utilizable en rutas que requieren un permiso para ser accedidas.
 * Defininedo un atributo "requierePermiso" con el nombre del permiso necesario para acceder
 * a esta ruta, se evita el acceso directo por usuarios que no tienen la autorizacion necesaria.
 *
 * Para evitar el acceso se utiliza el beforeModel() que es invocado por ember antes de intentar
 * acceder a la ruta. Esto significa que si se requiere un beforeModel() custom, se debe delegar en super primero.
 *
 * Si el usuario no tiene el permiso requerido para acceder a la ruta, se lo redirige al index de la aplicación,
 * el cual NO deberia requerir permisos especiales (para evitar ciclos).
 */
export default Ember.Mixin.create(UsuarioServiceInjected, NavigatorInjected, {
  beforeModel(){
    // Bypass all permission checks to allow rendering without backend
    return;
  }
});
