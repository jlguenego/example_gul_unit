(function() {
	'use strict';

	var app = angular.module('myModule', []);

	app.run(function($rootScope) {
		'ngInject';
		$rootScope.message = 'coucou!';
	});

})();
