import Ember from "ember";
import TarjetasServiceInjected from "../../../mixins/tarjetas-service-injected";
import MiembrosServiceInjected from "../../../mixins/miembros-service-injected";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";

export default Ember.Controller.extend(TarjetasServiceInjected, MiembrosServiceInjected, NavigatorInjected, MessagerInjected, {
});
