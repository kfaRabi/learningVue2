var msg = Vue.component('message', {
	props: ['title', 'body'],

	// props only supports  names that are of lower case 'a' to 'z'
	// no capitalization, camelCaseing, - or _
	// simply does not work for some wired reason

	data(){
		return {
			isVisible: true
		};
	},

	template: `
		<article class="message" v-show="isVisible">
		 	<div class="message-header">
		    	<p>{{ title }}</p>
		    	<button class="delete" @click = "deleteMessage"></button>
		  	</div>
		  	<div class="message-body">
		    	{{ body	}}
		  	</div>
		</article>	
	`,

	methods: {
		deleteMessage(){
			this.isVisible = false;
		}
	}

});





var app = new Vue({
	el: "#root",
});