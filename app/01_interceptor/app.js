(function () {
	'use strict';

	var app = angular.module('myApp', ['jlg-spinner', 'jlg-delay']);

	app.run(function ($rootScope, $http, $q) {
		'ngInject';
		$rootScope.start = function () {
			console.log('start', arguments);
			$http.get('./ws/s1')
				.then(function (response) {
					return $q.all([$http.get('./ws/s2'), $http.get('./ws/s3'), $http.get('./ws/s4')]);
				}).then(function (response) {
					return $http.get('./ws/s5');
				}).catch(function (error) {
					console.error('error', error);
				});
		};

		async function xhr(url) {
			return fetch(url).then(response => {
				if (response.status >= 200 && response.status < 400) {
					return Promise.resolve(response)
				} else {
					return Promise.reject(new Error(response.statusText))
				}
			});
		}

		$rootScope.start2 = async () => {
			console.log('start2');
			try {
				const s1 = await xhr('./ws/s1');
				const s2 = xhr('./ws/s2');
				const s3 = xhr('./ws/s3');
				const s4 = xhr('./ws/s4');
				await s2;
				await s3;
				await s4;
				const s5 = xhr('./ws/s5');
			} catch (e) {
				console.error('error', e);
			}
			console.log('end');
			
		};
	});

})();
