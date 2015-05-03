import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['now-playing'],
  player: inject.service(),
  showRemainingTime: false,

  song: function() {
    return this.get('player.song');
  }.property('player.song'),

  actions: {
    resume: function() {
      this.get('player').resume();
    },

    pause: function() {
      this.get('player').pause();
    },

    toggleTime: function() {
      this.toggleProperty('showRemainingTime');
    }
  }
});
