(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.config(['$provide', function ($provide) {
		$provide.decorator('$rootScope', function ($delegate) {
			var emit = $delegate.$emit;

			$delegate.$emit = function () {
				console.log.apply(console, arguments);
				emit.apply(this, arguments);
			};

			return $delegate;
		});
	}]);

	app.run(function($rootScope, $http, $log) {
		'ngInject';
		$rootScope.start = function() {
			// throw an event
			$rootScope.$emit('coucou');
		};

		$rootScope.$on('coucou', function() {
			console.log('hello !');
		});
	});

})();
