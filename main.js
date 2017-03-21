Vue.component('task', {
	template: `<li><slot></slot></li>`,
});

Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks">{{ task.desc }}</task>
		</div>
	`,

	data(){
		return {
			tasks: [
				{desc: "Go to the store", done: true},
				{desc: "Go to the university", done: true},
				{desc: "Eat dinner", done: false},
				{desc: "Watch tutorial", done: false},
				{desc: "Learn Vue", done: false},
				{desc: "Develop Social Network", done: false},
			]
		};
	}

});





var app = new Vue({
	el: "#root",
});