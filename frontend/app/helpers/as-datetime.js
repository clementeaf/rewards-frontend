import Ember from 'ember';
/* global moment */

export function asDateTime(params/*, hash*/) {
  var isoString = params[0];
  if(!isoString){
    return "";
  }
  var momentDate = moment(isoString);
  var formattedString = momentDate.format('DD/MM/YYYY - HH:mm');
  return formattedString;
}

export default Ember.Helper.helper(asDateTime);
