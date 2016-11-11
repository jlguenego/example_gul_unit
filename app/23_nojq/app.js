(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.controller('MyCtrl', function($element) {
		'ngInject';

		// not accessible in the run method (because the compiler has not yet run)
		// but in the controller, it is ok.
		console.log('$element', $element);
		var injector = $element.injector();
		console.log('injector', injector);
		var $rootScope = injector.get('$rootScope');
		var scope = $element.scope();

		scope.getInjector = function() {
			console.log('injector', injector);
			console.log('$rootScope', $rootScope);
			console.log('scope', scope);
			console.log('$.fn.jquery', $.fn.jquery);
		};
	});




})();
