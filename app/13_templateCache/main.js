const app = angular.module('main', []);

app.run(function($rootScope, $window) {
	$rootScope.click = function(str) {
		$window.alert(str);
	};
});

app.run(function($templateCache) {
	$templateCache.put('./t3.html', '<i ng-click="click(\'bonjour!!!\')">This is a javascript template...</i>');
	// grunt, gulp, webpack have special plugin to transform
	// file to $templateCache syntax (deprecated with webpack and html-loader)
});

import myTemplateHtml from './my-template.html';

app.component('myTemplate', {
	template: myTemplateHtml
});

