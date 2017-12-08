(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.run(function($rootScope) {
		'ngInject';
		$rootScope.uppercase = angular.uppercase;
	});

	app.directive('jlgTransform', function($parse) {
		'ngInject';
		return {
			restrict: 'A',
			scope: true,
			link: function(scope, element, attr, ctrl) {
				scope.$value = element.text();
				var newText = $parse(attr.jlgTransform)(scope);
				element.html(newText);
			}
		};
	});

})();
