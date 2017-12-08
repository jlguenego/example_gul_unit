(function() {
	'use strict';

	var app = angular.module('jlg-debug-digest', []);

	var timer = 0;

	app.config(['$provide', function($provide) {
		$provide.decorator('$browser', function($delegate) {
			var $$checkUrlChange = $delegate.$$checkUrlChange;
			$delegate.$$checkUrlChange = function() {
				console.log.call(console, 'digest start');
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
			console.log('end of digest', diff);
		});

	});
})();
