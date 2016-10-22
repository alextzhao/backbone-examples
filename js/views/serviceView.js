$(function() {
  // TODO: define a service view here

  // This view turns a Service model into HTML. Will create list <li> elements.
  var ServiceView = Backbone.View.extend({  // really just a giant JSON object.
    tagName: 'li',

    events: {
      // these are page events. There are some events that are pre-defied. Global events that
      // has already been defined. Note that 'click' is just a string here; we
      // already know that is is defined. But we could use any event, like 'monster'
      // and just define the 'monster' event and then trigger it.
      'click': 'toggleService',
    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render); // change is pre-defined.
    },

    render : function() {
      this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" /> ' + this.model.get('title') + '<span>$' + this.model.get('price') + '</span>');
      this.$('input').prop('checked', this.model.get('checked'));
      return this.$el;
    },

    // toggleService is just a function here. We could've named toggleService anything.
    toggleService: function() {
      this.model.toggle();  // we have not specified the model is the ServiceModel yet.
    }

  });

  window.ServiceView = ServiceView;

});
