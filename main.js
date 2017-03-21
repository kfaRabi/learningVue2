window.Event = new Vue();

Vue.component('cupon',{
	
	//props: [],

	template: `
		<input type="text" @blur = "fireEvent"/>
	`,

	methods: {
		fireEvent(){
			Event.$emit("applied");
		},
	},

});





var app = new Vue({
	el: "#root",
	
	data: {
		isApplied: false,
	},

	methods: {
		cuponApplied(){
			this.isApplied = true;
		},
	},

	mounted(){
		Event.$on("applied", () => alert("Handling It."));
	}

});