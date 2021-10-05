<template>
    <div class="images">
        <div class="images--item" v-for="(item, index) in images" :key="index">
            <a class="author" :href="item.link" target="_blank">
                <div class="author--left">
                    <img :src="item.authorImg" :alt="item.name" />
                </div>
                <div class="author--right">
                    <div class="author--name">{{ item.name }}</div>
                    <div class="author--link">{{ item.userName }}</div>
                </div>
            </a>
            <div class="image">
                <img :src="item.regular" :alt="item.altDescription" />
            </div>
            <div class="view">
                {{ item.likes }}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "GalleryList",
        computed: {
            ...mapGetters("gallery", ["images"]),
        },
    }
</script>

<style lang="scss" scoped>
.images {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding: 0 0 80px;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }

    &--item {
        text-align: left;
        margin: 0 10px;
        width: calc(50% - 20px);

        @media (max-width: 767px) {
            max-width: 440px;
            width: 100%;
        }

        .author {
            margin: 10px 10px 8px;
            display: -moz-box;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flexbox;
            display: flex;
            cursor: pointer;
            text-decoration: none;
            &--left {
                margin: 0 10px 0 0;
                img{
                    width: 30px; height: 30px; border-radius: 50%;
                }
            }
            &--name {
                font-style: normal;
                font-weight: bold;
                line-height: 14px;
                color: #333;
            }
            &--link {
                font-style: normal;
                font-weight: normal;
                line-height: 14px;
                color: #8d8d8d;
            }
        }

        .image {
            img {
                display: block;
                width: 100%;
                height: 230px;
                object-fit: cover;
                @media (max-width: 767px) {
                    height: 300px;
                }
                @media (max-width: 479px) {
                    height: 230px;
                }
            }
        }

        .view {
            text-align: right;
            font-style: normal;
            font-weight: bold;
            line-height: 14px;
            color: #8d8d8d;
            margin: 10px 10px 8px 0;
            padding: 0 23px 0 0;
            background: url('../../assets/eye.svg') right center no-repeat;
        }
    }
}
</style>