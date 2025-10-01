import Ember from 'ember';

export function asYesNoStringNullable(params) {
  const value = params[0];
  if(Ember.isNone(value)) {
    return null;
  }
  return value ? 'Si' : 'No';
}

export default Ember.Helper.helper(asYesNoStringNullable);
