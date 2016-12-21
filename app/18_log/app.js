(function() {
	'use strict';

	var app = angular.module('myApp', ['jlg-log-prod']);

	app.run(function($rootScope, $http, $log) {
		'ngInject';
		$rootScope.start = function() {
			$log.debug('start', arguments);
			$log.info('$log', $log);
			$log.log('end', arguments);
		};
	});

})();
