'use strict';

/**
 * @ngdoc overview
 * @name gambitApp
 * @description
 * # gambitApp
 *
 * Main module of the application.
 */
angular
  .module('gambitApp', [
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
      .otherwise({
        redirectTo: '/'
      });
  });
