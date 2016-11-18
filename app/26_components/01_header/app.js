(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.component('jlgHeader', {
		controller: function() {
			console.log('jlgHeader controller', arguments, this);
			this.$onInit = function() {
				console.log('jlgHeader controller $onInit', arguments, this);
			};
		},
		templateUrl: 'tmpl/jlg-header.html'
	});

})();
