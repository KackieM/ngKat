'use strict';

/**
 * @ngdoc function
 * @name ngKatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngKatApp
 */
angular.module('ngKatApp')
    .controller('ProductsCtrl', function ($scope) {

    		$scope.products = [
    			{name:'Ball of Fire',price: '$2000'}, 
    			{name:'Fiery Umbrella',price: '$3000'}, 
    			{name:'Kissing The Lipless',price: '$1000'}, 
    			{name:'Lonely Queen',price: '$5000'}

    		],
    	}