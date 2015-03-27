import DS from 'ember-data';

export default DS.Model.extend({
  track: DS.attr('number'),
  name: DS.attr('string'),
  duration: DS.attr('number'),
  url: DS.attr('string'),
  album: DS.belongsTo('album')
});
