(function() {
	'use strict';

	var app = angular.module('jlg-menu', []);

	app.component('jlgMenu', {
		controller: function() {
			'ngInject';
			console.log('jlgMenu controller', arguments, this);
			var ctrl = this;

			this.isMenuOn = false;
			this.off = function() {
				console.log('off');
				this.isMenuOn = false;
			};

			this.toggle = function() {
				console.log('toggle');
				this.isMenuOn = !this.isMenuOn;
			};
		},
		controllerAs: 'jlgMenu',
		templateUrl: 'tmpl/jlg-menu.html'
	});

})();
