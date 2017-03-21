Vue.component('cupon',{
	
	//props: [],

	template: `
		<input type="text" @blur = "fireEvent"/>
	`,

	methods: {
		fireEvent(){
			this.$emit("applied");
		},
	},

})





var app = new Vue({
	el: "#root",
	
	data: {
		isApplied: false,
	},

	methods: {
		cuponApplied(){
			this.isApplied = true;
		},
	}

});