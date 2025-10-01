import Ember from 'ember';

export function bothEmpty(params) {
  var unArray = params[0];
  var otroArray = params[1];
  return unArray.length > 0 || otroArray.length > 0;
}

export default Ember.Helper.helper(bothEmpty);
