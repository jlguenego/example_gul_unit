(function() {
	'use strict';

	var app = angular.module('myModule', []);

	app.config(function() {
		'ngInject';
		console.log('myModule config');
	});

	app.run(function($rootScope) {
		'ngInject';
		console.log('myModule run');
		$rootScope.message = 'coucou!';
	});

})();
