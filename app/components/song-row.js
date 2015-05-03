import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['isCurrentSong'],
  player: inject.service(),

  isCurrentSong: function() {
    return this.get('song') === this.get('player.song');
  }.property('player.song', 'song'),

  isPlaying: function() {
    return this.get('player.isPlaying') && this.get('isCurrentSong');
  }.property('player.isPlaying', 'isCurrentSong'),

  actions: {
    play: function() {
      this.get('player').play(this.get('song'));
    },

    pause: function() {
      this.get('player').pause();
    }
  }
});
