(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.run(function($rootScope) {
		$rootScope.message = 'coucou';
		$rootScope.foo = {
			bar: 15
		};
		$rootScope.hello = function() {
			alert('Hello !!!');
		};
	});

	app.directive('childScope', function() {
		return {
			scope: true,
			link: function($scope) {
				// uncomment this just to see what will happens...
				// $scope.message = undefined;
			}
		};
	});

	app.directive('isolatedScope', function() {
		return {
			scope: {
				message: '=?'
			},
			link: function($scope) {
				console.log('$scope', $scope);
				// $scope.message = undefined; // comment this just to see what will happens...			
			},
			templateUrl: 'template.html'
		};
	});

	app.directive('databinding', function() {
		return {
			scope: {
				twoWays: '=',
				oneWay: '<',
				reference: '@',
				execute: '&',
			},
			templateUrl: 'databinding.html'
		};
	});
})();
