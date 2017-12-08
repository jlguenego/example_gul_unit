(function() {
	'use strict';

	var app = angular.module('jlg-debug-digest', []);

	var timer = 0;
	var isStarted = false;
	var id = 0;

	var log = console.log.bind(
		console,
		'%cjlg-debug-digest:',
		'color: green');


	app.config(['$provide', function($provide) {
		$provide.decorator('$browser', function($delegate) {
			var $$checkUrlChange = $delegate.$$checkUrlChange;
			$delegate.$$checkUrlChange = function() {
				if (isStarted) {
					return;
				}
				isStarted = true;
				log(id, 'start');
				timer = performance.now();
				$$checkUrlChange.apply($delegate, arguments);
			};
			return $delegate;
		});
	}]);

	app.run(function($rootScope, $timeout) {
		function postDigest(callback) {
			var unregister = $rootScope.$watch(function() {
				unregister();
				$timeout(function() {
					callback();
					postDigest(callback);
				}, 0, false);
			});
		}

		postDigest(function() {
			var diff = performance.now() - timer;
			log(id, 'end - duration:', diff.toFixed(3), 'ms');
			isStarted = false;
			id++;
		});

	});
})();
