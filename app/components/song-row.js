import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isPlaying: false,

  actions: {
    togglePlay: function() {
      this.toggleProperty('isPlaying');
    }
  }
});
