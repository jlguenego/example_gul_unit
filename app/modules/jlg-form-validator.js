(function() {
	'use strict';

	var app = angular.module('jlg-form-validator', []);

	app.service('jlgFormValidator', function JLGFormValidator() {

        this.isError = function(field) {
            return field.$invalid && field.$touched && field.$dirty;
        };
        
		this.check = function(formCtrl) {
			for (const field in formCtrl) {
				if (field.substr(0, 1) === '$') {
					continue;
				}
				formCtrl[field].$setTouched();
				formCtrl[field].$setDirty();
			}
			if (formCtrl.$valid) {
				return true;
			}
			const target = formCtrl.$$element[0].querySelector('.ng-invalid');
			target.focus();
			return false;
		};
	});
})();
