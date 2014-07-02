'use strict';

/**
 * @ngdoc function
 * @name ngKatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngKatApp
 */
angular.module('ngKatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
