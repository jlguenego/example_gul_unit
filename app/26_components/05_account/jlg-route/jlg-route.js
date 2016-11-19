(function() {
	'use strict';

	var app = angular.module('jlg-route', ['ui.router', 'ui.router.state.events']);

	app.component('home', {
		templateUrl: 'jlg-route/tmpl/home.html'
	});

	app.component('signin', {
		controller: function($state, $rootScope) {
			'ngInject';
			this.signin = function() {
				console.log('signin http', arguments);
				$rootScope.account = {
					firstname: 'Suzana',
					lastname: 'GUENEGO'
				};
				$state.go('home');
			};
		},
		templateUrl: 'jlg-route/tmpl/signin.html'
	});

	app.config(function($stateProvider, $urlRouterProvider) {
		'ngInject';
		// An array of state definitions
		var states = [
			{
				name: 'home',
				url: '/',
				component: 'home',
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
		$urlRouterProvider.otherwise('/');
	});

	app.run(function($rootScope, $state) {
		'ngInject';
		console.log('jlg-route run', arguments);

		$rootScope.account = undefined;

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
