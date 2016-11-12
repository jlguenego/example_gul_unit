(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.run(function($rootScope) {
		'ngInject';

		$rootScope.message = 'coucou';

	});

	app.directive('dir1', function() {
		'ngInject';
		return {
			scope: {
				truc: '=truc'
			},
			bindToController: true,
			controller: function() {
				console.log('controller', this);
				console.log('ctrl.truc', this.truc);
				this.hello = 'World';
			},
			controllerAs: 'ctrl',
			link: function() {
				console.log('dir1 link', arguments);

			}
		};
	});


})();
