import Ember from 'ember';

function pad(number) {
  return String('0' + number).slice(-2);
}

function formatDuration(duration) {
  var minutes = parseInt(duration / 60),
      seconds = duration % 60;

  return minutes + ":" + pad(seconds);
}

export default Ember.Handlebars.makeBoundHelper(formatDuration);
