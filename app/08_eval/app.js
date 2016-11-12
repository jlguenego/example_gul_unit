(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.run(function($rootScope) {
		'ngInject';
		$rootScope.uppercase = angular.uppercase;
	});

	// Just to look how much time take a digest cycle.
	app.directive('jlgTransform', function() {
		'ngInject';
		return {
			restrict: 'A',
			scope: true,
			link: function(scope, element, attr, ctrl) {
				scope.$value = element.text();
				var newText = scope.$eval(attr.jlgTransform);
				console.log('newText', newText);
				element.html(newText);
			}
		};

	});

})();
