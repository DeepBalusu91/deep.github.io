<template>
  <div id="app">
    <!-- Add the CharacterProfile component in the template -->
    <CharacterProfile />
  </div>
</template>

<script>
import CharacterProfile from './components/CharacterProfile.vue'

export default {
  name: 'App',
  components: {
    CharacterProfile
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
  margin-top: 60px;
}
</style>
