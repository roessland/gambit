'use strict';

/**
 * @ngdoc function
 * @name gambitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gambitApp
 */
angular.module('gambitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
