<template>
    <div>
        <div v-if="news.length">
            <div v-for="(item, index) in news" :key="index" class="card">
                <h2>{{ item.title }}</h2>
            </div>
        </div>
        <baseLoader v-else />
    </div>
</template>

<script>
    import baseLoader from '../components/Base/baseLoader'
    import { mapActions, mapState } from "vuex";

    export default {
        name: 'MainPage',
        components: {
            baseLoader
        },
        mounted() {
            this.getNews()
        },
        computed: {
            ...mapState("main", ["news"]),
        },
        methods: {
            ...mapActions("main", ["getNews"]),
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
