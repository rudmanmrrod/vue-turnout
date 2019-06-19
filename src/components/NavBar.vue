<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" @click="home">TurnOut</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" @click="addEvent">Agregar Evento</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <template slot="button-content"><em>{{user}}</em></template>
          <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { firebaseApp } from '../firebaseApp'
import router from '../router'

export default{
  data(){
    return {
      user: this.getUser()
    }
  },
  methods:{
    signOut(){
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    },
    getUser(){
      try{
        this.user = this.$store.state.user.email.split('@')[0]
      }
      catch(error){
        this.user = {}
      }
    },
    home(){
      router.push('/')
    },
    addEvent(){
      router.push('/add-event')
    }
  }
}

</script>