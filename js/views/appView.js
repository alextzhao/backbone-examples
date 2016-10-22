$(function() {
  // TODO: create a main application view to encapsulate services

  var AppView = Backbone.View.extend({
    //el is also a Backbone reserved keyword. JQuery knows that it has been
    // passed a JQuery constructor. It will automatically convert it to a
    // DOM node.
    el: $('#main'), // el is an optional elemeent. Models are generated run time.

    initialize: function() {
      this.listenTo(this.collection, 'change', this.render);

      // taken care by backbone.
      this.collection.each(function(service) {
        var view = new window.ServiceView( { model: service} );
        $('#services').append(view.render());

      });


    },

    render: function() {
      // the individual services are being rendered by serviceView. Just need
      // to render the total cost now.
      var checked_models = this.collection.getChecked();
      var total = 0;

      checked_models.forEach(function(checked_model) {
        total += checked_model.get('price');
      });

      $('#total').text('$' + total);
    }


  });
  window.AppView = AppView;

});
