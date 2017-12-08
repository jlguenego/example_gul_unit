(function() {
	'use strict';

	var app = angular.module('jlg-debug-emit', []);

	app.config(['$provide', function($provide) {
		$provide.decorator('$rootScope', function($delegate) {
			var emit = $delegate.$emit;
			$delegate.$emit = function() {
				var args = Array.prototype.slice.call(arguments);
				args.unshift('%cjlg-debug-emit:', 'color: blue');
				console.log(...args);
				emit.apply(this, arguments);
			};
			return $delegate;
		});
	}]);
})();
