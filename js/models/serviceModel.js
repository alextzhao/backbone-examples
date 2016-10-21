$(function() {
  // TODO: define a service model here
  
  var Service = Backbone.Model.extend({

    initialize: function() {
      console.log('Creating a new service for ' + this.get('title'));
    },

    defaults:{
      title: 'My service',
      price: 100,
      checked: false
    },

    // Helper function for checking/unchecking a service
    toggle: function(){
      this.set('checked', !this.get('checked'));
    }
  });

  window.Service = Service;
});