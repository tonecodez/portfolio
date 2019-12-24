<template>
  <div id="app">
    <!-- {{"Tony's Portfolio... experimenting with Docker :)"}} -->
    <Navbar></Navbar>
    <router-view></router-view>  
    <Contact></Contact>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Contact
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
