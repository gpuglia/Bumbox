import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['now-playing'],
  player: inject.service(),

  song: function() {
    return this.get('player.song');
  }.property('player.song')
});
