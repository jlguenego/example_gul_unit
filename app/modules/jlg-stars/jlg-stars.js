(function() {
	'use strict';

	var app = angular.module('jlg-stars', []);

	// Just to look how much time take a digest cycle.
	app.component('jlgStars', {
		require: {
			ngModel: 'ngModel',
		},
		controller: function($scope, $element, $compile) {
			this.$onInit = () => {
				this.ngModel.$render = () => {
					var total = 5;
					var html = '<span>';
					var note = Number((this.ngModel.$viewValue === '') ? undefined : this.ngModel.$viewValue);
					note = (isNaN(note)) ? undefined : note;
					note = (note > 5) ? undefined : note;
					note = (note < 0) ? undefined : note;
					if (note === undefined) {
						for (var i = 0; i < total; i++) {
							html += '<img ng-click="update(' + (i + 1) + ')" src="img/gray_star.png">';
						}
					} else {
						for (var i = 0; i < note; i++) {
							html += '<img ng-click="update(' + (i + 1) + ')" src="img/yellow_star.png">';
						}
						for (var i = note; i < total; i++) {
							html += '<img ng-click="update(' + (i + 1) + ')" src="img/white_star.png">';
						}
					}
					html += '</span>';
					$element.html(html);
					$compile($element.contents())($scope);
					checkValidity(note);
				};

				$scope.update = (note) => {
					this.ngModel.$setViewValue(note);
					this.ngModel.$render();
					// because we have no blur event, then we must set the touched ourselves.
					this.ngModel.$setTouched();
				};

				var checkValidity = (note) => {
					this.ngModel.$setValidity('Star', note !== undefined);
				};
			};
		}
	});
})();
