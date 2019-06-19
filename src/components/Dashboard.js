import { firebaseApp, eventsRef } from '../firebaseApp'
import AddEvent from './AddEvent.vue'

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
      snap.forEach(event_ob =>{
        events.push(event_ob.val())
      })
      console.log(events)
    })
  },
  components:{
    AddEvent
  }
}