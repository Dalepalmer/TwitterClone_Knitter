Knitter.KnittController = Ember.ObjectController.extend({
  isExpanded: false,
  actions: {
    toggleDate: function() {
      var currentState = this.get('isExpanded');
      this.set('isExpanded', !currentState);
    }
  }
});
