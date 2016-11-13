(function() {
	'use strict';

	var app = angular.module('myApp', ['oc.lazyLoad']);

	app.controller('MyCtrl', function($timeout, $ocLazyLoad) {
		'ngInject';
		$timeout(function() {
			console.log('loading module');
			$ocLazyLoad.load('jlg-module.js');
		}, 2000);
	});


})();
