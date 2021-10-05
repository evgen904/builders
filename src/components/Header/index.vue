<template>
    <div class="nav">
        <router-link to="/">Главная</router-link> |
        <router-link to="/articles">Статьи</router-link> |
        <router-link to="/gallery/1">Галерея</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss" scoped>
.nav {
    text-align: center;
    margin-bottom: 30px;
    padding-top: 20px;
    a {
        display: inline-block;
        color: #cc0000;
    }
}
</style>
