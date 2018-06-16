
const myApp = angular.module( 'myApp', ['ngRoute'] );

myApp.config(function($routeProvider) {
  console.log('in config');
  $routeProvider.when('/', {
      templateUrl: 'scripts/views/home.html',
      controller: 'CatalogController as vm'
  }).when('/add_book', {
      templateUrl: 'scripts/views/add_book.html',
      controller: 'AddbookController as vm'
  }).when('/manage_genres', {
      templateUrl: 'scripts/views/manage_genres.html',
      controller: 'ManagegenresController as vm'
  }).otherwise({
      template: '<h2>404 Page Not Found</h2>'
  });
});