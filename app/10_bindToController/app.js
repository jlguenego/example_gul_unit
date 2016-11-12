(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.run(function($rootScope) {
		'ngInject';

		$rootScope.toto = 'coucou';

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

	app.directive('parentDir', function() {
		'ngInject';
		return {
			controller: function() {
				console.log('parentCtrl', this);
				this.counter = 0;
				this.$onInit = function() {
					console.log('parentCtrl $onInit', arguments);
				};
			},
			controllerAs: 'parentCtrl',
			link: function() {
				console.log('parentDir link', arguments);
			}
		};
	});

	app.directive('childDir', function() {
		'ngInject';
		return {
			require: {
				'parent': '^^parentDir'
			},
			bindToController: true,
			controller: function() {
				console.log('childCtrl', this);
				console.log('childCtrl.parent', this.parent);
				this.$onInit = function() {
					console.log('childCtrl $onInit', arguments);
					console.log('childCtrl.parent', this.parent);
					this.parent.counter++;
				};
			},
			controllerAs: 'childCtrl',
			link: function() {
				console.log('childDir link', arguments);
			}
		};
	});

})();
