'use strict';

/**
 * @ngdoc function
 * @name dailyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dailyApp
 */
angular.module('dailyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
