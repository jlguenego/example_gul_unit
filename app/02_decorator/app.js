(function () {
	'use strict';

	var app = angular.module('myApp', ['jlg-debug-emit']);

	app.run(function ($rootScope, $http, $log) {
		'ngInject';
		$rootScope.start = function () {
			// throw an event
			$rootScope.$emit('coucou', { kiki: 'tata' });
		};

		$rootScope.$on('coucou', function () {
			console.log('hello !');
		});
	});

})();
