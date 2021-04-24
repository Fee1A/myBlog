<template>
  <!-- <app-head></app-head> -->
  <firstScreen></firstScreen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import firstScreen from './components/firstScreen.vue'

export default defineComponent({
  name: 'App',
  components: {
    firstScreen
  }
})
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
