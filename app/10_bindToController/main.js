(function() {
	'use strict';

	var app = angular.module('main', []);

	app.directive('myDirective', function() {
		return {
			scope: {
				message: '='
			},
			bindToController: true,
			controller: function MyDirectiveCtrl($scope) {
				console.log('MyDirectiveCtrl constructor', this.message);
				this.$onInit = () => {
					console.log('MyDirectiveCtrl init', this.message);
				};
				$scope.$watch('$ctrl.message', (...args) => {
					console.log('MyDirectiveCtrl watch', args);
				});
			},
			controllerAs: '$ctrl',
			template: '<b>my-directive->$ctrl: {{$ctrl}}</b>',
		};
	});

})();
