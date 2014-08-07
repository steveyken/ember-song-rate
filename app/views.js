App.StarView = Ember.View.extend({

  // We're using a view here so we can have more than just a click action.
  // With a view, you can add mouseEnter and mouseLeave events too.

  tagName: "a",

  // this click event propagates to the controller which, in this case, is the component.
  // the component has a 'click' action defined.
  click: function(evt) {
    this.get('controller').send('click', this.get('star'));
  },

  mouseLeave: function(evt) {
    this.get('controller').send('mouseLeave', this.get('star'));
  },

  mouseEnter: function(evt) {
    this.get('controller').send('mouseEnter', this.get('star'));
  }

});
