import { firebaseApp } from '../firebaseApp'

export default{
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods:{
    SignUp(){
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
      .catch(error => {
        this.error = error.message;
      })
    }
  }
}