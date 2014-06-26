'use strict';

/**
 * @ngdoc function
 * @name gambitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gambitApp
 */
angular.module('gambitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
