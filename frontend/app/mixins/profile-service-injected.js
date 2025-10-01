import Ember from "ember";

/**
 * Mixin que injecta profile-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _profile: Ember.inject.service('profile-service'),
  profileService(){
    return this.get('_profile');
  },
});
