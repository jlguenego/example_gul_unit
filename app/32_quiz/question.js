export const questions = [{
	question: 'What is the difference between the recipe value and constant?',
	choices: [
		'There is no difference', 
		'The recipe value cannot be used in the config phase, while the constant recipe can.', 
		'The object defined in the constant value cannot be modified after it is defined.',
		'The recipe constant is the same as the keyword const in ES6.',
		'The constant recipe defines a provider, and not a service.'],
	correctAnswer: 1
}, {
	question: 'What is the module auto, which indicated in the official documentation reference API?',
	choices: [
		'The documentation is lying, it is not a module in the source code.',
		'The auto module is the very core module of AngularJS and contain the main directives.',
		'The auto module is used for making AngularJS in automatic mode, instead of manual.',
		'The auto module contains only directives used by the ng modules.',
		'Sorry, but the auto module does not exist in the documentation.',	
	],
	correctAnswer: 0
}, {
	question: 'What does ng-cloak is used for?',
	choices: [
		'To manage the IIFE.',
		'To manage the FOUC.',
		'To manage the ES6 code.',
		'To manage the strict mode.',
		'To manage the sloppy mode.',
	],
	correctAnswer: 1
}, {
	question: 'Which affirmation is wrong here?',
	choices: [
		'A directive is not a component.',
		'A service always has an associated provider.',
		'A service can be defined with 5 different recipes: value, factory, service, provider, constant.',
		'A provider can only be used in the config phase.',
		'A component can be restricted on a class.',
	],
	correctAnswer: 4
}, {
	question: 'Which one is a compilation directive?',
	choices: [
		'ng-app.',
		'ng-jq',
		'ng-cloak',
		'ng-strict',
		'ng-csp',
	],
	correctAnswer: 2
}];
