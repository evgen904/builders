<template>
  <div id="app">
    <Heeader />
    <router-view/>
  </div>
</template>

<script>
  import Heeader from "./components/Header"
  import bridge from "@vkontakte/vk-bridge";

  export default {
    name: 'App',
    components: {
      Heeader
    },
    mounted() {
      bridge.send("VKWebAppInit", {}).then((response) => {

      });
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
