Vue.component('modal', {
	
	// we can hide the modal just like we hide a message using component's local data and methods.
	// To do this, we would just attach @click="isActive=false" on the modal-close button.
	// Reminder: Then, isActive needs to be this modal's local returned data.

	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<p>
						<slot></slot>
					</p>
				</div>
			</div>
			<button class="modal-close" @click="$emit('close')"></button>
		</div>
	`
});





var app = new Vue({
	el: "#root",
	data: {
		isActive: false,
	}
});