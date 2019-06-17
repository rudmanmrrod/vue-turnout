import { firebaseApp } from '../firebaseApp'

export default{
  data(){
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods:{
    SignIn(){
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
      .catch(error => {
        this.error = error.message;
      })
    }
  }
}