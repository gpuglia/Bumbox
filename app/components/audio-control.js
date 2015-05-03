import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'span',
  player: inject.service(),
  classNames: ['play'],

  actions: {
    play: function() {
      this.sendAction('play');
    },

    pause: function() {
      this.sendAction('pause');
    }
  }
});
