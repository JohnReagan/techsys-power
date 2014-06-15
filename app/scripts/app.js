'use strict';

/**
 * @ngdoc overview
 * @name techsysPowerApp
 * @description
 * # techsysPowerApp
 *
 * Main module of the application.
 */
angular
  .module('techsysPowerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('techsysPowerApp')
  .controller('NavCtrl', function ($scope) {
    $scope.links = ['Home', 'About', 'Services', 'Contact'];

  $scope.selectedIndex = 0;

  $scope.itemClicked = function (index) {
    selectedIndex = index;
  }
  });