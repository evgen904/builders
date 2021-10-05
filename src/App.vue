<template>
  <div id="app">
    <Heeader />
    <router-view/>
  </div>
</template>

<script>
  import Heeader from "./components/Header"

  export default {
    name: 'App',
    components: {
      Heeader
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
