export function childDir() {
	return {
		// try to remove the isolated scope to see what happens.
		scope: {},
		require: {
			parent: '^^parentDir',
			grandParent: '^^grandParentDir',
		},
		bindToController: true,
		controller: function() {
			console.log('childCtrl', this);
			console.log('childCtrl.parent', this.parent);
			this.$onInit = () => {
				this.parent.counter++;
				this.grandParent.childCounter++;
				this.id = this.grandParent.childCounter;
				console.log('this.id', this.id);
			};
		},
		controllerAs: '$ctrl',
		template: '<div>child {{$ctrl.id}}</div>'
	};
};
