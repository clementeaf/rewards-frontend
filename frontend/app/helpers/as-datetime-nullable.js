import Ember from 'ember';
/* global moment */

export function asDateTimeNullable(params) {
  const isoString = params[0];
  if(Ember.isNone(isoString)) {
    return null;
  }
  const momentDate = moment(isoString);
  return momentDate.format('DD/MM/YYYY - HH:mm');
}

export default Ember.Helper.helper(asDateTimeNullable);
