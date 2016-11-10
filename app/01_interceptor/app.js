(function() {
	'use strict';

	var app = angular.module('myApp', ['jlg-spinner', 'jlg-delay']);

	app.run(function($rootScope, $http, $q) {
		'ngInject';
		$rootScope.start = function() {
			console.log('start', arguments);
			$http.get('./ws/s1')
				.then(function(response) {
					return $q.all([$http.get('./ws/s2'), $http.get('./ws/s3'), $http.get('./ws/s4')]);
				}).then(function(response) {
					return $http.get('./ws/s5');
				}).catch(function(error) {
					console.error('error', error);
				});
		};
	});

})();
