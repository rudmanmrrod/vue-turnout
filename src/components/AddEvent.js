import { eventsRef } from '../firebaseApp'

export default {
	data() {
		return {
			event: {
				title: '',
				description: '',
				location: '',
				date: '',
				email: this.$store.state.user.email
			}
		}
	},
	methods:{
		addEvent(){
			eventsRef.push(this.event)
		}
	}
}