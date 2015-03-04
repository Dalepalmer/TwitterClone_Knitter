Knitter.KnittsController = Ember.ArrayController.extend({
  actions: {
    newKnitt: function() {
      knitts.addObject({
                 id: this.length + 1,
                 username: this.username,
                 body: this.body,
                 date: new Date()
               });
    }
  }
});
