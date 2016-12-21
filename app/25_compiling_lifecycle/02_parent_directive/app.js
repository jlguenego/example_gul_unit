(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.directive('dir1', function() {
		'ngInject';
		return {

			controller: function($element) {
				console.log('dir1 controller', this, arguments);
				this.$onInit = function() {
					console.log('dir1 controller $onInit', this, arguments);
				};
			},
			controllerAs: '$ctrl',
			bindToController: true,
			scope: {},
			compile: function(tElement, tAttrs, transclude) {
				console.log('dir1 compile', this, arguments);
				return {
					pre: function(scope, element, attrs) {
						console.log('dir1 prelink', this, arguments);
					},
					post: function(scope, element, attrs) {
						console.log('dir1 postlink', this, arguments);
					},
				};

			},


		};
	});

	app.directive('dir2', function() {
		'ngInject';
		return {
			templateUrl: function() {
				console.log('dir2 templateUrl', this, arguments);
				return 'tmpl/dir2.html';
			},
			transclude: false,
			controller: function($element) {
				console.log('dir2 controller', this, arguments);
				this.$onInit = function() {
					console.log('dir2 controller $onInit', this, arguments);
				};
			},
			controllerAs: '$ctrl',
			bindToController: true,
			scope: {},
			compile: function(tElement, tAttrs, transclude) {
				console.log('dir2 compile', this, arguments);
				return {
					pre: function(scope, element, attrs) {
						console.log('dir2 prelink', this, arguments);
					},
					post: function(scope, element, attrs) {
						console.log('dir2 postlink', this, arguments);
					},
				};

			},


		};
	});

	app.config(function($httpProvider, $provide) {
		'ngInject';

		$provide.factory('myDelayInterceptor', function($injector) {
			var $timeout = $injector.get('$timeout');
			return {
				request: function(config) {
					console.log('waiting for 2s ', config);
					return $timeout(function() {
						console.log('ok we go ! ', config);
						return config;
					}, 2000);
				},
			};
		});

		$httpProvider.interceptors.push('myDelayInterceptor');

		console.log('interceptors', $httpProvider.interceptors);
	});

})();
