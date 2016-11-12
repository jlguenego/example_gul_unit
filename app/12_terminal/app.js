(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.directive('myDirective1', function() {
		return {
			priority: 1,
			terminal: false,
			link: function() {
				console.log('I am myDirective1');
			}
		};
	});

	app.directive('myDirective2', function() {
		return {
			priority: 10,
			terminal: true,
			link: function() {
				console.log('I am myDirective2');
			}
		};
	});

	app.directive('myDirective3', function() {
		return {
			priority: 100,
			terminal: false,
			link: function() {
				console.log('I am myDirective3');
			}
		};
	});

	app.directive('andThen', function() {
		return function() {
			console.log('and then');
		};

	});

})();
