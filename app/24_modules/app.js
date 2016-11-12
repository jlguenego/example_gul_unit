(function() {
	'use strict';

	angular.element(document).ready(function() {
		console.log('bootstrap', arguments);

		// ouah... this module has no name... it is an anonymous module...
		// fortunately, ng is loaded before...
		angular.bootstrap(document, [['$controllerProvider', '$provide', function($controllerProvider, $provide) {

			// equivalent to do module.controller
			$controllerProvider.register('MyCtrl', ['$element', '$scope', function($element, $scope) {

				console.log('$element', $element);
				var injector = $element.injector();
				console.log('injector', injector);
				this.message = 'Hello World';

				// the injector cannot have $scope or $element. This last two are specific to the controller
				injector.invoke(['$rootElement', '$rootScope', function bootstrapApply(element, scope) {
					console.log('injector invoke', arguments);
				}]);

				// the injector cannot have $scope or $element. This last two are specific to the controller
				injector.invoke(['$element', '$scope', function bootstrapApply(element, scope) {
					console.log('injector invoke', arguments);
				}], undefined, { '$scope': $scope, '$element': $element});
			}]);

			console.log('provide', $provide);

		}]], {strictDi: true});
	});

})();
