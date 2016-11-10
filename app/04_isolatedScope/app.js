(function() {
	'use strict';

	// TODO :
	// 1) remove the expression in the html -> look at $rootScope.$$watcher
	// 2) remove the watch expression in the javascript -> look at $rootScope.$$watcher
	// 3) remove the input in the javascript -> look at $rootScope.$$watcher


	var app = angular.module('myApp', []);

	app.run(function($rootScope) {
		'ngInject';

		$rootScope.message = 'coucou';

		$rootScope.logScope = function() {
			console.log('scope', $rootScope);
		};
	});

	app.controller('MyController', function($scope) {
		'ngInject';
		if ($scope.$id < 4) {
			$scope.message = undefined; // comment this just to see what will happens...

			$scope.object = {
				x: 12
			};
		}
	});

	app.directive('myDirective', function() {
		'ngInject';
		return function() {
			console.log('myDirective postlink', arguments);
		};
	});

	app.directive('myDirective2', function() {
		'ngInject';
		return {
			link: function() {
				console.log('myDirective2 postlink', arguments);
			}
		};
	});

	app.directive('myDirective3', function() {
		'ngInject';
		return {
			scope: true,
			link: function() {
				console.log('myDirective3 postlink', arguments);
			}
		};
	});

	app.directive('myDirective4', function() {
		'ngInject';
		return {
			scope: {
				message1: '=msg',
				message2: '@msg',
				message3: '<msg',
			},
			template: '<div>message1: <input ng-model="message1" /></div>' +
				'<div>message2: <input ng-model="message2" /></div>' +
				'<div>message3: <input ng-model="message3" /></div>',
			link: function() {
				console.log('myDirective4 postlink', arguments);
			}
		};
	});
})();
