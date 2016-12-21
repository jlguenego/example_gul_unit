(function() {
	'use strict';

	var app = angular.module('jlg-log', []);

	// look at how we put the right FILE and LINE (angular bug...)
	// we can also play on CSS...
	// see http://stackoverflow.com/questions/7505623/colors-in-javascript-console
	// see http://stackoverflow.com/questions/13815640/a-proper-wrapper-for-console-log-with-correct-line-number

	app.decorator('$log', function $logDecorator($delegate) {
		'ngInject';

		$delegate.debug = console.log.bind(
			window.console,
			'%cDecorated Debug: %c ouah le css... ;) %c %s',
			'color: green',
			'color: yellow; background-color: blue',
			'color: blue');

		$delegate.error = console.log.bind(
			window.console,
			'%cDecorated Error: %c ouah le css... ;) %c %s',
			'color: green',
			'color: yellow; background-color: blue',
			'color: blue');

		$delegate.info = console.log.bind(
			window.console,
			'%cDecorated Info: %c ouah le css... ;) %c %s',
			'color: green',
			'color: yellow; background-color: blue',
			'color: blue');

		$delegate.log = console.log.bind(
			window.console,
			'%cDecorated Log: %c ouah le css... ;) %c %s',
			'color: green',
			'color: yellow; background-color: blue',
			'color: blue');

		$delegate.warn = console.log.bind(
			window.console,
			'%cDecorated Warn: %c ouah le css... ;) %c %s',
			'color: green',
			'color: yellow; background-color: blue',
			'color: blue');

		return $delegate;
    });

})();
