(function() {
	'use strict';

	var app = angular.module('myApp', ['ui.router']);

	app.config(function($stateProvider) {
		var helloState = {
			name: 'hello',
			url: '/hello',
			template: '<h3>hello world!</h3>'
		}

		var aboutState = {
			name: 'about',
			url: '/about',
			template: '<h3>Its the UI-Router hello world app!</h3>'
		}

		$stateProvider.state(helloState);
		$stateProvider.state(aboutState);
	});

	app.run(function($rootScope, $window) {
		'ngInject';
		$rootScope.click = function(str) {
			$window.alert(str);
		};
	});

})();
