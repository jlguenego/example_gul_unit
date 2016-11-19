(function() {
	'use strict';

	var app = angular.module('jlg-route', ['ui.router', 'ui.router.state.events']);

	app.component('routeHome', {
		templateUrl: 'jlg-route/tmpl/home.html'
	});

	app.component('signin', {
		templateUrl: 'jlg-route/tmpl/signin.html'
	});

	app.config(function($stateProvider) {
		'ngInject';
		// An array of state definitions
		var states = [
			{
				name: 'home',
				url: '/',
				component: 'routeHome',
				back: false
			}, {
				name: 'signin',
				url: '/signin',
				component: 'signin',
				back: true
			}
		]

		// Loop over the state definitions and register them
		states.forEach(function(state) {
			$stateProvider.state(state);
		});
	});

	app.run(function($rootScope, $state) {
		'ngInject';
		console.log('jlg-route run', arguments);

		var isBackPresent = function() {
			return $state.$current.back;
		};

		$rootScope.isBackPresent = isBackPresent();
		$rootScope.$on('$stateChangeSuccess', function() {
			console.log('$stateChangeStart start', arguments);
			$rootScope.isBackPresent = isBackPresent();
		});
	});


})();
