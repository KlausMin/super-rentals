import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    //page의 Root URI를 /rentals로 설정
    this.replaceWith('rentals');
  }
});
