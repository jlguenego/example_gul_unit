(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.config(['$compileProvider', function ($compileProvider) {
		// comment this to go in debug mode (default)
		$compileProvider.debugInfoEnabled(false);
	}]);

	app.controller('MyCtrl', function($element) {
		'ngInject';

		// not accessible in the run method (because the compiler has not yet run)
		// but in the controller, it is ok.
		console.log('$element', $element);
		var injector = $element.injector();
		console.log('injector', injector);
		var $rootScope = injector.get('$rootScope');
		console.log('$rootScope', $rootScope);

		// not working in production mode.
		var scope = $element.scope();
		console.log('scope', scope);

		scope.getInjector = function() {
			console.log('injector', injector);
			console.log('$rootScope', $rootScope);
			console.log('scope', scope);
			console.log('$.fn.jquery', $.fn.jquery);
		};
	});

	console.log('module myApp', app);




})();
