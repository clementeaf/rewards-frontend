import Ember from "ember";
import VouchersServiceInjected from "../../mixins/vouchers-service-injected";
import AuthorizedRoute from "../../mixins/authorized-route";
import PermisosConocidos from "../../utils/permisos-conocidos";

export default Ember.Route.extend(VouchersServiceInjected, AuthorizedRoute,{
  requierePermiso: PermisosConocidos.ENTREGAR_VOUCHER,
  model(){
    return Ember.Object.create({miembros: Ember.A(), voucherEnCreacion: this.set('voucherEnCreacion', this.vouchersService().nuevoVoucher())});
  }
});
