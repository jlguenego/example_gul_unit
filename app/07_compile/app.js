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
			scope: false,
			require: '?ngModel',
			link: function (scope, element, attr, ctrl) {
				if (attr.type !== 'stars' || ctrl === undefined || ctrl === null) {
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
					note = (note > 5) ? undefined : note;
					note = (note < 0) ? undefined : note;
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
					// var linkingFn = $compile(elt.contents()); // compare this line with the next one...
					var linkingFn = $compile(elt);
					//console.log('compile', compile);
					//console.log('linkingFn', linkingFn.toString());
					var node = linkingFn(scope);
					//console.log('node', node);
					checkValidity(note);
				};

				scope.update = function(note) {
					ctrl.$setViewValue(note);
					ctrl.$render();
					// because we have no blur event, then we must set the touched ourselves.
					ctrl.$setTouched();
				};

				var checkValidity = function(note) {
					ctrl.$setValidity('Star', note !== undefined);
				};


			}
		};

	});



})();
