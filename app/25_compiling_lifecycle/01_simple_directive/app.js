(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.directive('simpleDir', function() {
		'ngInject';
		return {
			templateUrl: function() {
				console.log('simpleDir templateUrl', this, arguments);
				return 'tmpl/dir1.html';
			},
			transclude: false,
			controller: function($element) {
				console.log('simpleDir controller', this, arguments);
				this.$onInit = function() {
					console.log('simpleDir controller $onInit', this, arguments);
				};
			},
			controllerAs: '$ctrl',
			bindToController: true,
			scope: {},
			compile: function(tElement, tAttrs, transclude) {
				console.log('simpleDir compile', this, arguments);
				return {
					pre: function(scope, element, attrs) {
						console.log('simpleDir prelink', this, arguments);
					},
					post: function(scope, element, attrs) {
						console.log('simpleDir postlink', this, arguments);
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
