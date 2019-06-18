import { firebaseApp } from '../firebaseApp'

export default {
  methods: {
    signOut(){
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  }
}