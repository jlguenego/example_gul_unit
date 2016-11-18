(function() {
	'use strict';

	var app = angular.module('jlg-route', ['ui.router']);

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
				component: 'routeHome'
			}, {
				name: 'signin',
				url: '/signin',
				component: 'signin'
			}
		]

		// Loop over the state definitions and register them
		states.forEach(function(state) {
			$stateProvider.state(state);
		});
	});



})();
