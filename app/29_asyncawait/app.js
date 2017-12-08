(function () {
	'use strict';

	var app = angular.module('myApp', ['jlg-spinner', 'jlg-delay']);

	app.run(function ($rootScope, $http, $q) {
		'ngInject';

		async function xhr(url) {
			return $http.get(url).then(response => Promise.resolve(response)).catch(error => Promise.reject(error));
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
				const s5 = await xhr('./ws/s5');
			} catch (e) {
				console.error('error', e);
			}
			console.log('end');
			
		};
	});

})();
