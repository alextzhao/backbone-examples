$(function() {
  // TODO: define a service collection here
  
  var ServiceList = Backbone.Collection.extend({

    // Will hold objects of the Service model
    model: window.Service,

    // Return an array only with the checked services
    getChecked: function(){
      return this.where({checked:true});
    }
  });

  window.ServiceList = ServiceList;
  
});