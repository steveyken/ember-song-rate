App = Ember.Application.create();

// integrate Underscore with LoDash
_.mixin(_.string.exports());

App.Router.map(function() {
  this.resource('songs', {
    path: '/'
  });
});

App.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'myApp.songs'
});
