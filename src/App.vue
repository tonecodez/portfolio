<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Overview msg="Tony's Portfolio... experimenting with Docker :)"/>
  </div>
</template>

<script>
import Overview from './components/Overview.vue'

export default {
  name: 'app',
  components: {
    Overview
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
  margin-top: 60px;
}
</style>
