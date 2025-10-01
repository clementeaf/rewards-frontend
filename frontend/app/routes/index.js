import Ember from "ember";
import NavigatorInjected from "../mixins/navigator-injected";

/**
 * Este es el punto de entrada cuando el usuario no indica una seccion especial
 * Lo redirigimos desde aca al home, permitiendo agregar logica para dirigirlo a
 * otros lados si hace falta
 */
export default Ember.Route.extend(NavigatorInjected, {
  beforeModel() {
    this.navigator().navigateToHome();
  },
});
