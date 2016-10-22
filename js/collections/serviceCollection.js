$(function() {

  var ServiceCollection = Backbone.Collection.extend({
    model: window.ServiceModel, // if browser can't find variable it looks at window by default.

    getChecked: function() {
      return this.where({checked: true}); // the where function by default looks at the model.
    }
  });

  window.ServiceCollection = ServiceCollection;
});
