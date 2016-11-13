(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.run(function($rootScope, $window) {
		'ngInject';
		$rootScope.click = function(str) {
			$window.alert(str);
		};
	});

	app.run(function($templateCache) {
		'ngInject';
		$templateCache.put('./t3.html', '<i ng-click="click(\'bonjour!!!\')">This is a javascript template...</i>');
		// do you know that a utility exists to transform all your file templates into a javascript file ?
		// it work for Grunt, Gulp and webpack for instance...
		// so everything template is preloaded before your application starts... so no ajax just for loading a view.
	});

})();
