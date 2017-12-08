(function () {
	'use strict';

	var app = angular.module('myApp', ['jlg-spinner', 'jlg-delay']);

	app.run(function ($rootScope, $http, $q) {
		'ngInject';
		$rootScope.start = function () {
			var prefix = '../../ws';
			console.log('start', arguments);
			$http.get(prefix + '/s1')
				.then(function (response) {
					return $q.all([$http.get(prefix + '/s2'), $http.get(prefix + '/s3'), $http.get(prefix + '/s4')]);
				}).then(function (response) {
					return $http.get(prefix + '/s5');
				}).catch(function (error) {
					console.error('error', error);
				});
		};
	});

})();
