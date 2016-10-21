$(function() {
  // TODO: link together the models, collections and services!
  
  console.log('Starting our Backbone application!');

  var services = new window.ServiceList([
    new window.Service({ title: 'web development', price: 200}),
    new window.Service({ title: 'web design', price: 250}),
    new window.Service({ title: 'photography', price: 100}),
    new window.Service({ title: 'coffee drinking', price: 10})
  ]);

  new window.AppView({
    collection: services
  });
  
});