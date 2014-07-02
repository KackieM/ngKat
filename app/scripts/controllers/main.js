'use strict';

/**
 * @ngdoc function
 * @name ngKatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngKatApp
 */
angular.module('ngKatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
