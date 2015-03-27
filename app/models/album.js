import DS from 'ember-data';
import Ember from 'ember';

var computed = Ember.computed,
    attr = DS.attr;

export default DS.Model.extend({
  artwork: attr('string'),
  name: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: DS.hasMany('songs'),

  songsDurations: computed.mapBy('songs', 'duration'),
  totalDuration: computed.sum('songsDurations'),
  songCount: computed.alias('songs.length')
});
