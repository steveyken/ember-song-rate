App.SongsController = Ember.ArrayController.extend({

  sortProperties: [ 'score' ],
  sortAscending: false,

  isEmpty: function() {
    return !this.get('length');
  }.property('length'),

  isNotComplete: function() {
    return _.isBlank(this.get('newArtist')) || _.isBlank(this.get('newTitle'));
  }.property('newArtist', 'newTitle'),

  actions: {
    addSong: function() {
      this.store.createRecord('song', {
        artist: this.get('newArtist'),
        title: this.get('newTitle'),
        score: 0
      }).save();

      this.set('newArtist', '');
      this.set('newTitle', '');
    },

    deleteSong: function(song) {
     song.deleteRecord();
     song.save();
    },

    updateScore: function(song, score) {
      song.set('score', score);
      song.save();
    }

  }

});
