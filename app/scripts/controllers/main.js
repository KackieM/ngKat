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
    $scope.customers = [
      {name:'John Smith',city: 'Phoenix'}, 
      {name:'Katherine Mattison',city: 'NYC'}, 
      {name:'Vinnie Kitts',city: 'Chicago'}, 
      {name:'Jack Mattison',city: 'Charleston'}
    ];

    
  });
