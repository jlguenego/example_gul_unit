(function() {
	'use strict';

	var app = angular.module('myApp', []);

	// Just to look how much time take a digest cycle.
	app.directive('input', function() {
		return {
			restrict: 'E',
			require: 'ngModel',
			link: function (scope, element, attr, ctrl) {
				if (attr.type !== 'stars') {
					return;
				}
				console.log('input type="stars"', arguments);

				var html = '<div ng-model="note">coucou</div>';
				element.append(html);

			}
		};

	});

})();
