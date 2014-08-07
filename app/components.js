App.RatingStarsComponent = Ember.Component.extend({

  setStars: function() {
    var idx = 0, stars = [];
    for (idx = 0; idx < this.get("max"); idx += 1) {
      stars.push({
        index: idx,
        highlight: idx <= this.get("hoverIdx"),
        full: this.get("score") > idx || idx <= this.get("hoverIdx")
      });
    }
    this.set('stars', stars);
  }.observes("score", "max", "hoverIdx").on("didInsertElement"),
  // using didInsertElement to execute code on initial load

  actions: {
    // this is called by the view that is encapsulated inside this component
    click: function(star) {
      var score = star.index + 1;
      this.set('score', score);
      // the action of this component is 'updateScore'
      this.sendAction('action', this.get('param'), score);
    },

    mouseEnter: function(star) {
      this.set('hoverIdx', star.index);
    },

    mouseLeave: function(star) {
      this.set('hoverIdx', -1);
    },

  },

});
