$(function() {
  // TODO: link together the models, collections and services!
  var list_of_models = [
    new window.ServiceModel({title: 'web design', price: 150}),
    new window.ServiceModel({title: 'photography'}),
    new window.ServiceModel({title: 'javaScript', price: 250}),
    new window.ServiceModel()
  ];

  var serviceList = new window.ServiceCollection(list_of_models);

  var whatever = new window.AppView({
    collection: serviceList
  });

});
