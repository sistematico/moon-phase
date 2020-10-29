<template>
  <div id="app">
    <img alt="Moon Phase" src="./assets/logo.png">
    <Moon />
  </div>
</template>

<script>
import Moon from './components/Moon.vue'

export default {
  name: 'App',
  components: {
    Moon
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
