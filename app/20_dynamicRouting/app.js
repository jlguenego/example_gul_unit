(function() {
	'use strict';

	var app = angular.module('myApp', ['ui.router', 'ui.router.visualizer']);

	app.config(function($stateProvider, $urlRouterProvider) {
		'ngInject';

		var helloState = {
			name: 'hello',
			url: '/hello',
			template: '<h3>hello world!</h3>'
		};

		var aboutState = {
			name: 'about',
			url: '/about',
			template: '<h3>Its the UI-Router hello world app!</h3>'
		};

		var helloState = {
			name: 'hello',
			url: '/hello',
			template: '<h3>hello world!</h3>'
		};

		$stateProvider.state(helloState);
		$stateProvider.state(aboutState);

		$urlRouterProvider.otherwise('hello');
	});

	// config-time dependencies can be injected here at .provider() declaration
	app.provider('runtimeStates', function runtimeStates($stateProvider) {
		'ngInject';
		this.$get = function() { // for example
			'ngInject';
			return {
				addState: function(state) {
					$stateProvider.state(state);
				}
			}
		}
	});

	app.run(function($rootScope, $state, runtimeStates) {
		'ngInject';
		$rootScope.loadDynamicState = function(stateName) {
			console.log('loadDynamicState', arguments);
			runtimeStates.addState({
				name: stateName,
				url: '/' + stateName,
				template: '<h3>yes...' + stateName + '</h3>'
			});
			$state.go(stateName);
		};
	});

})();
