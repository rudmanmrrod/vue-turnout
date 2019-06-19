import { firebaseApp, eventsRef } from '../firebaseApp'
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'

export default {
  methods: {
    signOut(){
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  },
  mounted(){
    eventsRef.on('value',snap => {
      let events = []
      snap.forEach(event_ob => {
        events.push(event_ob.val())
      })
      this.$store.dispatch('setEvents',events)
    })
  },
  components:{
    AddEvent,
    EventItem
  }
}