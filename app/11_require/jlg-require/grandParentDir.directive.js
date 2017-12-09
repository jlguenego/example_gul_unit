export function grandParentDir() {
	return {
		controller: function() {
			console.log('grandParentCtrl', this);
			this.parentCounter = 0;
			this.childCounter = 0;
		},
	};
};
