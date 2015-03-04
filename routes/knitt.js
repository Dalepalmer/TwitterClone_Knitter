Knitter.KnittRoute = Ember.Route.extend({
  model: function(params) {
    return knitts.findBy('id', params.knitt_id)
  }
});
