<template>
  <div id="app">
    <NavBar v-show="$store.state.user.email" />
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import NavBar from './components/NavBar.vue'

export default{
  components: {
    NavBar
  }
}
</script>
