(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.run(function($rootScope) {
		'ngInject';

		$rootScope.logScope = function() {
			console.log('scope', $rootScope);
		};
	});

	// Just to look how much time take a digest cycle.
	app.directive('input', function($compile) {
		'ngInject';
		return {
			restrict: 'E',
			scope: {},
			require: 'ngModel',
			link: function (scope, element, attr, ctrl) {
				if (attr.type !== 'stars') {
					return;
				}
				console.log('input type="stars"', arguments);
				var elt = angular.element('<!-- input type="stars" ng-model="' + attr.ngModel + '" --><div></div>');
				element.after(elt);
				element.attr('style', 'display: none !important');

				ctrl.$render = function() {
					console.log('ctrl', ctrl);
					var total = 5;
					var html = '';
					var note = Number((ctrl.$viewValue === '') ? undefined : ctrl.$viewValue);
					note = (isNaN(note)) ? undefined : note;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					if (note === undefined) {
						for (var i = 0; i < total; i++) {
							html += '<img ng-click="update(' + (i + 1) + ')" src="img/gray_star.png" />';
						}
					} else {
						for (var i = 0; i < note; i++) {
							html += '<img ng-click="update(' + (i + 0) + ')" src="img/yellow_star.png" />';
						}
						for (var i = note; i < total; i++) {
							html += '<img ng-click="update(' + (i + 1) + ')" src="img/white_star.png" />';
						}
					}
					console.log('html', html);
					elt.html(html);
					// $compile(elt.contents())(scope); // compare this line with the next one...
					$compile(elt)(scope);
					checkValidity(note);
				};

				scope.update = function(note) {
					ctrl.$setViewValue(note);
					ctrl.$render();
					// because we have no blur event, then we must set the touched ourselves.
					ctrl.$setTouched();
				};

				var checkValidity = function(note) {
					var validForOutOfBounds = (!isNaN(note)) && note >= 0 && note <=5;
					ctrl.$setValidity('outOfBounds', validForOutOfBounds);
				};


			}
		};

	});



})();
