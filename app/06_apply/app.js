(function() {
	'use strict';

	var app = angular.module('myApp', ['jlg-debug-digest']);

	app.run(function($rootScope, $timeout) {
		$rootScope.reset = function() {
			setTimeout(function() {
				$rootScope.test = '';
				console.log('message reset');
				// here is your digest... with an eval also.
				$rootScope.$apply('test = "yes!!!"');
			}, 20);
		};
	});

})();
