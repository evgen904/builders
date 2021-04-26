<template>
    <div>
        <div v-if="articles.length">
            <div v-for="(item, index) in articles" :key="index" class="card">
                <h2>{{ item.title }}</h2>
                <p>{{ item.body }}</p>
            </div>
        </div>
        <baseLoader v-else />
    </div>
</template>

<script>
    import baseLoader from '../components/Base/baseLoader'
    import {mapActions, mapState} from "vuex";

    export default {
        name: 'ArticlesPage',
        components: {
            baseLoader
        },
        mounted() {
            this.getArticles()
        },
        computed: {
            ...mapState("articles", ["articles"]),
        },
        methods: {
            ...mapActions("articles", ["getArticles"]),
        }
    }
</script>

<style lang="scss" scoped>
.card {
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 12px;
    max-width: 400px;
    margin: 0 auto 10px;
    h2 {
        padding: 0;
        margin: 0 0 10px;
        font-size: 22px;
    }
}
</style>
