(function () {
	'use strict';
	console.log('Toto');

	var app = angular.module('main', []);
	app.controller('MyCtrl', function MyCtrl(serviceA, serviceB) {
		console.log('Instantiating MyCtrl');
		serviceA.start();
		serviceB.start();
	});

	// app.service('serviceA', function ServiceA(serviceB) {
	// 	'ngInject';
	// 	console.log('Instantiating service A');
	// });

	// app.service('serviceB', function ServiceB(serviceA) {
	// 	'ngInject';
	// 	console.log('Instantiating service B');
	// });

	app.service('serviceA', function ServiceA($injector) {
		'ngInject';
		console.log('Instantiating service A');
		// var serviceB = $injector.get('serviceB');
		this.start = function () {
			var serviceB = $injector.get('serviceB');
		}
	});

	app.service('serviceB', function ServiceB($injector) {
		'ngInject';
		console.log('Instantiating service B');
		// var serviceA = $injector.get('serviceA');
		this.start = function () {
			var serviceA = $injector.get('serviceA');
		}

	});

})();
