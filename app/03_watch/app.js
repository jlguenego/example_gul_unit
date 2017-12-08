(function() {
	'use strict';

	var app = angular.module('main', []);

	app.component('jlgArray', {
		controller: function JLGArray() {
			console.log('jlgArray');
		},
		templateUrl: 'jlg-array.html',
		bindings: {
			array: '=',
		}
	});

	app.run(function($rootScope) {
		'ngInject';
		$rootScope.array = [{ value: 'Hello' }];
	});

})();
