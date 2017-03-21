Vue.component('tab', {

	props: {
		name: { required: true,},
		selected: {default: false,},
	},

	template: `
		<div v-show="this.isActive"><slot></slot></div>
	`,
	
	data(){
		return {isActive: false};
	},
	//we are creating this bcz, otherwise we had to change the property of the components.
	//Vue does not allow that. Hence, the isActive data field.

	computed: {
		getLink(){
			return '#' + this.name.toLowerCase().replace(/ /g, '-');
		}
	},

});

Vue.component('tabs',{
	
	//props: [],

	template: `
		<div>
			<div class="tabs">
			 	<ul>
			    	<li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
			    		<a :href="tab.getLink" @click="selectTab(tab)">{{ tab.name }}</a>
			    	</li>
				</ul>
			</div>
			<div class="tab-details">
				<slot></slot>
			</div>
		</div>
	`,

	data(){
		return{
			tabs: [],
		};
	},

	mounted(){ // learn the diffrences btn mounted and created
		this.tabs = this.$children;
		// if(this.tabs.length){
		// 	this.tabs[0].isActive = true;
		// }
		let flag = true;
		for (var i = 0; i <= this.tabs.length - 1; i++) {
			//--i changed to i++
			if(this.tabs[i].selected){
				this.tabs[i].isActive = true;
				flag = false;
				break;
			}
		}
		if(this.tabs.length && flag){
			this.tabs[0].isActive = true;
		}
	},

	methods: {
		selectTab(selectedTab){
			this.tabs.forEach(tab => {
				tab.isActive = (tab.name == selectedTab.name);
			});
		}	
	}

})





var app = new Vue({
	el: "#root",

});