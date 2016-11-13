(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.directive('dir1', function() {
		'ngInject';
		return {
			scope: {},
			controller: function($element) {
				console.log('dir1', $element.attr('name'), this);
				this.$onInit = function() {
					console.log('dir1 $onInit', $element.attr('name'), arguments);
				};
			},
			controllerAs: 'dir1Ctrl',
			compile: function(tElement, tAttrs, transclude) {
				console.log('dir1 compile', tAttrs.name, arguments);
				return {
					pre: function(scope, element, attrs) {
						console.log('dir1 prelink', attrs.name, arguments);
					},
					post: function(scope, element, attrs) {
						console.log('dir1 postlink', attrs.name, arguments);
					},
				};

			}

		};
	});

	app.directive('dir2', function() {
		'ngInject';
		return {
			scope: {},
			controller: function() {
				console.log('dir2', this);
				this.$onInit = function() {
					console.log('dir2 $onInit', arguments);
				};
			},
			controllerAs: 'dir2Ctrl',
			compile: function(tElement, tAttrs, transclude) {
				console.log('dir2 compile', tAttrs.name, arguments);
				return {
					pre: function(scope, element, attrs) {
						console.log('dir2 prelink', attrs.name, arguments);
					},
					post: function(scope, element, attrs) {
						console.log('dir2 postlink', attrs.name, arguments);
					},
				};

			}

		};
	});

})();
