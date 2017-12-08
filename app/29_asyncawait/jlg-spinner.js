(function() {
	'use strict';

	// TODO: add a filter on route template in order to
	// not interpret a route template as an ajax request.

	var app = angular.module('jlg-spinner', ['angularSpinner']);

	app.run(function($rootScope, $http, $q) {
		'ngInject';
		$rootScope.AjaxCount = 0;
		$rootScope.showSpinner = false;
	});

	app.config(function($httpProvider, $provide) {
		'ngInject';

		$provide.factory('mySpinnerInterceptor', function($injector) {
			var $q = $injector.get('$q');
			var $rootScope = $injector.get('$rootScope');
			var $timeout = $injector.get('$timeout');

			$rootScope.$watch('AjaxCount', function(newValue, oldValue) {
				if (newValue > 0 && oldValue == 0) {
					$timeout(function() {
						if ($rootScope.AjaxCount) {
							$rootScope.showSpinner = true;
						}
					}, 500);

				}
				if (newValue == 0) {
					$timeout(function() {
						if ($rootScope.AjaxCount == 0) {
							$rootScope.showSpinner = false;
						}
					}, 20);
				}
			});



			return {
				request: function(config) {
					// do something on success
					console.log('jlg-spinner: running interceptor request ', config);
					$rootScope.AjaxCount++;
					return config;
				},


				response: function(response) {
					console.log('jlg-spinner: running interceptor response ', response);
					$rootScope.AjaxCount--;

					if (response.data.result == 'Error') {
						console.error('error', response);
						return $q.reject(response);
					}
					return response;
				},

				responseError: function(rejection) {
					console.log('jlg-spinner: running interceptor responseError ', rejection);
					$rootScope.AjaxCount--;
					return $q.reject(rejection);
				}
			};
		});

		$httpProvider.interceptors.push('mySpinnerInterceptor');

		console.log('interceptors', $httpProvider.interceptors);
	});
})();
