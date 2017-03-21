Vue.component('modal-card',{
	
	//props: [],

	template: `
		<div class="modal is-active">
		  	<div class="modal-background"></div>
		  	<div class="modal-card">
		    	<header class="modal-card-head">
		      		<p class="modal-card-title">
						<slot name = "title"></slot>
		    	    </p>
		      		<button class="delete"></button>
		    	</header>
		    	<section class="modal-card-body">
		      		<slot>
						<!-- default slot does not need any name slot -->
		      		</slot>
		    	</section>
		    	<footer class="modal-card-foot">
		    		<slot name = "footer">
		      			<a class="button is-success">Ok</a>
		    		</slot>
		    	</footer>
		  </div>
		</div>
	`,

});





var app = new Vue({
	el: "#root",
	

});