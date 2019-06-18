import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import { firebaseApp } from './firebaseApp'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

firebaseApp.auth().onAuthStateChanged( user =>{
  if(user){
    store.dispatch('signIn',user)
    router.push('/')
  }else{
    router.replace('/signin')
  }
})

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
