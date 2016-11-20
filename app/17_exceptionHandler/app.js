(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.factory('$exceptionHandler', function($log) {
		return function myExceptionHandler(exception, cause) {
			$log.debug('ben t\'as fait quoi ???...');
			$log.warn(exception, cause);
		};
	});

})();
