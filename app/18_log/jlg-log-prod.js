(function() {
	'use strict';

	var app = angular.module('jlg-log-prod', []);

	// look at how we put the right FILE and LINE (angular bug...)
	// we can also play on CSS...
	// see http://stackoverflow.com/questions/7505623/colors-in-javascript-console
	// see http://stackoverflow.com/questions/13815640/a-proper-wrapper-for-console-log-with-correct-line-number

	app.config(function($provide) {
		$provide.decorator('$log', function $logDecorator($delegate, $injector) {
			'ngInject';



			var stack = [];
			var max = 4;
			var log = function() {
				console.log(arguments);
				stack.push(arguments);
				if (stack.length > max) {
					var $http = $injector.get('$http');
					$http.post('ws/log', stack);
					stack = [];
				}
			};

			$delegate.debug = log;

			$delegate.error = log;

			$delegate.info = log;

			$delegate.log = log;

			$delegate.warn = log;
			return $delegate;
		});
	});



})();
