(function() {
	'use strict';

	var app = angular.module('myApp', []);

	// Just to look how much time take a digest cycle.
	app.run(function($rootScope, $timeout) {
		'ngInject';

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
			console.log('end of digest');
		});

		$rootScope.logScope = function() {
			console.log('scope', $rootScope);
		};

		$rootScope.doNotDigest = function() {
			setTimeout(function() {
				$rootScope.test = '';
				console.log('message reset');
				// where is my digest... ???
			}, 20);
		};

	});

})();
