(function() {
	'use strict';

	var app = angular.module('jlg-navigation', []);

	app.run(function($rootScope, $window) {
		$rootScope.back = function(){
			$window.history.back();
		};

		$rootScope.reload = function(){
			$window.history.reload();
		}
	});

})();
