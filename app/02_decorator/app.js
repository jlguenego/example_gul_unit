(function() {
	'use strict';

	var app = angular.module('myApp', ['jlg-log']);

	app.run(function($rootScope, $http, $log) {
		'ngInject';
		$rootScope.start = function() {
			$log.debug('start', arguments);
		};
	});

})();
