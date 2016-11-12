(function() {
	'use strict';

	angular.element(document).ready(function() {
		console.log('bootstrap', arguments);

		// ouah... this module has no name... it is an anonymous module...
		// fortunately, ng is loaded before...
		angular.bootstrap(document, [['$controllerProvider', function($controllerProvider) {

			// equivalent to do module.controller
			$controllerProvider.register('MyCtrl', ['$element', function($element) {

				console.log('$element', $element);
				var injector = $element.injector();
				console.log('injector', injector);
				this.message = 'Hello World';

				// the injector cannot have $scope or $element. This last two are specific to the controller
				injector.invoke(['$rootElement', '$rootScope', function bootstrapApply(element, scope) {
					console.log('injector invoke', arguments);
				}]);
			}]);

		}]], {strictDi: true});
	});

})();
