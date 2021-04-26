<template>
  <div id="app">
    <div>
      <router-link to="/">Главная</router-link> |
      <router-link to="/articles">Статьи</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
