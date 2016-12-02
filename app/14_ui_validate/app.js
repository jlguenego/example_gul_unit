(function() {
	'use strict';

	var app = angular.module('myApp', ['ui.validate']);

	app.run(function($rootScope, $log) {
		'ngInject';
		$rootScope.doSomething = function() {
			$window.alert('Wonderful!');
		};
		$rootScope.isNir = function(str) {
			return /^[1-3][0-9]{4}(2[AB]|[0-9]{2})[0-9]{6}$/.test(str);
		};
		$rootScope.isPassword = function(str) {
			if (typeof str === 'string') {
				$log.debug('string ok');
			} else {
				return false;
			}
			if (str.length > 8) {
				$log.debug('length ok');
			} else {
				return false;
			}
			if (/[^0-9a-zA-Z]/.test(str)) {
				$log.debug('char other ok');
			} else {
				return false;
			}
			if (/[0-9]/.test(str)) {
				$log.debug('num ok');
			} else {
				return false;
			}
			if (/[a-z]/.test(str)) {
				$log.debug('lower ok');
			} else {
				return false;
			}
			if (/[A-Z]/.test(str)) {
				$log.debug('upper (and all) ok');
			} else {
				return false;
			}
			return true;
		};
	});
})();
