export function parentDir() {
	return {
		require: {
			grandParent: '^^grandParentDir',
		},
		bindToController: true,
		controller: function() {
			console.log('parentCtrl', this);
			this.$onInit = function() {
				console.log('parentCtrl $onInit', arguments);
				this.grandParent.parentCounter++;
			};
		},
		controllerAs: '$ctrl',
	};
}