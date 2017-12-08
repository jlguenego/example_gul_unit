(function() {
	'use strict';

	var app = angular.module('myApp', ['jlg-debug-digest']);

	// Just to look how much time take a digest cycle.
	app.run(function($rootScope, $timeout) {
		'ngInject';

		$rootScope.reset = function() {
			setTimeout(function() {
				$rootScope.test = '';
				console.log('message reset');
				// where is my digest... ???
			}, 20);
		};

	});

})();
