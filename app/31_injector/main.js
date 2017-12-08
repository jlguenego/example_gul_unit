var app = angular.module('main', []);

app.run(function($rootScope) {
	$rootScope.message = 'Hello AngularJS !';
});

var $injector = angular.injector(['ng', 'main']);

$injector.invoke(function($compile, $timeout) {
	'ngInject';

	// compile but 3 seconds after just for fun...
	$timeout(function() {
		var $rootScope = $injector.get('$rootScope');
		var $rootElement = angular.element(document.getElementsByTagName('body')[0]);
		$compile($rootElement)($rootScope);
	}, 3000);

});
