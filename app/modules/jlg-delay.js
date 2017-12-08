(function() {
	'use strict';

	var app = angular.module('jlg-delay', []);

	app.config(function($httpProvider, $provide) {
		'ngInject';

		$provide.factory('myDelayInterceptor', function($injector) {
			var $q = $injector.get('$q');
			var $timeout = $injector.get('$timeout');

			return {
				request: function(config) {
					console.log('jlg-delay: running interceptor request ', config);
					return config;
				},

				response: function(response) {
					console.log('jlg-delay: running interceptor response ', response);
					if (response.data.result != 'ok') {
						console.error('error', response);
						return $q.reject(response);
					}
					if ('delay' in response.data) {
						console.log('jlg-delay: waiting for ' + response.data.delay + ' seconds');
						return $timeout(function() {
							console.log('jlg-delay: returning ', response);
							return response;
						}, response.data.delay * 1000);
					}
					return response;
				},

				responseError: function(rejection) {
					console.log('jlg-delay: running interceptor responseError ', rejection);
					return $q.reject(rejection);
				}
			};
		});

		$httpProvider.interceptors.push('myDelayInterceptor');

		console.log('interceptors', $httpProvider.interceptors);
	});
})();
