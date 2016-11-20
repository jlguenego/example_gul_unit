(function() {
	'use strict';

	var app = angular.module('jlg-log', []);

	// look at how we put the right FILE and LINE (angular bug...)
	// we can also play on CSS...
	// see http://stackoverflow.com/questions/7505623/colors-in-javascript-console
	// see http://stackoverflow.com/questions/13815640/a-proper-wrapper-for-console-log-with-correct-line-number

	app.decorator('$log', function $logDecorator($delegate) {
		'ngInject';
		var originalDebug = $delegate.debug;
		$delegate.debug = console.log.bind(
			window.console,
			'%cDecorated Debug: %c ouah le css... ;) %c %s',
			'color: green',
			'color: yellow; background-color: blue',
			'color: blue');

		return $delegate;
    });

})();
