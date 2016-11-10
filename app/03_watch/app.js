(function() {
	'use strict';

	// TODO :
	// 1) remove the expression in the html -> look at $rootScope.$$watcher
	// 2) remove the watch expression in the javascript -> look at $rootScope.$$watcher
	// 3) remove the input in the javascript -> look at $rootScope.$$watcher


	var app = angular.module('myApp', []);

	app.run(function($rootScope) {
		'ngInject';

		$rootScope.$watch('message2', function() {
			console.log('watch message', arguments);
		});

		$rootScope.logScope = function() {
			console.log('scope', $rootScope);
			for (var i = 0; i < $rootScope.$$watchers.length; i++) {
				console.log('scope.$$watchers[' + i + '].fn', $rootScope.$$watchers[i].fn.toString());
			}

		};
	});

})();