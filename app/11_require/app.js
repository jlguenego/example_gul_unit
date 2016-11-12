(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.directive('grandParentDir', function() {
		'ngInject';
		return {
			scope: {},
			controller: function() {
				console.log('grandParentCtrl', this);
				this.parentCounter = 0;
				this.childCounter = 0;
				this.$onInit = function() {
					console.log('grandParentCtrl $onInit', arguments);
				};
			},
			controllerAs: 'grandParentCtrl',
			link: {
				pre: function() {
					console.log('grandParentDir prelink', arguments);
				},
				post: function() {
					console.log('grandParentDir postlink', arguments);
				},
			}
		};
	});

	app.directive('parentDir', function() {
		'ngInject';
		return {
			require: {
				'grandParent': '^^grandParentDir',
			},
			scope: {},
			bindToController: true,
			controller: function() {
				console.log('parentCtrl', this);
				this.counter = 0;
				this.$onInit = function() {
					console.log('parentCtrl $onInit', arguments);
					this.grandParent.parentCounter++;
				};
			},
			controllerAs: 'parentCtrl',
			link: {
				pre: function() {
					console.log('parentDir prelink', arguments);
				},
				post: function() {
					console.log('parentDir postlink', arguments);
				},
			}
		};
	});

	app.directive('childDir', function() {
		'ngInject';
		return {
			scope: {},
			require: {
				'parent': '^^parentDir',
				'grandParent': '^^grandParentDir',
			},
			bindToController: true,
			controller: function() {
				console.log('childCtrl', this);
				console.log('childCtrl.parent', this.parent);
				this.$onInit = function() {
					this.parent.counter++;
					this.grandParent.childCounter++;
					console.log('childCtrl $onInit', arguments);
					console.log('childCtrl.parent', this.parent);
					console.log('childCtrl.grandParent', this.grandParent);

				};
			},
			controllerAs: 'childCtrl',
			link: {
				pre: function() {
					console.log('childDir prelink', arguments);
				},
				post: function() {
					console.log('childDir postlink', arguments);
				},
			}
		};
	});

})();
