<template>
  <div id="app">
    <Navigation />
    <HomePage />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    Navigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
