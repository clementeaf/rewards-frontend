import Ember from "ember";
import MessagerInjected from "../../mixins/messager-injected";

export default Ember.Component.extend({MessagerInjected,
  opcionesDeValidacion:{
    messages:{
      csv:{
        required:'Debe seleccionar un archivo',
      },
    },
  },
});
