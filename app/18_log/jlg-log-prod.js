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

			var array = [];
			var log = function() {
				console.log.apply(console, arguments);
				var args = Array.prototype.map.call(arguments, function(n) {
					if (typeof n === 'object') {
						return CircularJSON.stringify(n);
					}
					return n;
				});
				var st = new Error().stack;
				var item = st.split('\n')[2];
				var matches = item.match(/at (.*)/);
				args.unshift(matches[1]);
				array.push(args);
			};

			var send = function() {
				var $http = $injector.get('$http');
				$http.post('ws/log', array);
				array = [];
			};

			$delegate.debug = log;

			$delegate.error = log;

			$delegate.info = log;

			$delegate.log = function() {
				log.apply(console, arguments);
				send();
			};


			$delegate.warn = log;
			return $delegate;
		});
	});



})();
