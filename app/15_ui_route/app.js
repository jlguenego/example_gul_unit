(function() {
	'use strict';

	var app = angular.module('myApp', ['ui.router']);

	app.config(function($stateProvider) {
		'ngInject';

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

	app.run(function($transitions) {
		'ngInject';
		$transitions.onStart({}, function(trans) {
			console.log('onStart', arguments);
			var from = trans.$from();
			console.log('from', from);
			var to = trans.$to();
			console.log('to', to);
		});
	});

})();
