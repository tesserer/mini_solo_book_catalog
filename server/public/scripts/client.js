
const myApp = angular.module( 'myApp', ['ngRoute'] );

myApp.config(function($routeProvider) {
  console.log('in config');
  $routeProvider.when('/', {
      templateUrl: 'scripts/views/home.html'
  }).when('/add_book', {
      templateUrl: 'scripts/views/add_book.html'
  }).when('/manage_genres', {
      templateUrl: 'scripts/views/manage_genres.html'
  }).otherwise({
      template: '<h2>404 Page Not Found</h2>'
  });
});