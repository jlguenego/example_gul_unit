var app = angular.module('main', []);

app.run(function($rootScope) {
	$rootScope.message = 'Hello AngularJS !';
});

angular.bootstrap(document, ['main'], { strictDi: true });
