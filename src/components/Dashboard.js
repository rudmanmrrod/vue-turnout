import { eventsRef } from '../firebaseApp'
import EventItem from './EventItem.vue'

export default {
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
    EventItem
  }
}