<template>
    <div>
        <div class="gallery" v-if="images.length">
            <GalleryList />
            <div class="gallery--paginate">
                <Paginate
                    v-model="pageNum"
                    :page-count="Math.ceil(totalFound / perPage)"
                    :page-range="5"
                    :margin-pages="1"
                    :prev-text="'<'"
                    :next-text="'>'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"
                    :hide-prev-next="true"
                    :click-handler="loadPage"
                ></Paginate>
            </div>
        </div>
        <baseLoader v-else />
    </div>
</template>

<script>
    import Paginate from "vuejs-paginate";
    import GalleryList from "./GalleryList";
    import baseLoader from "../../components/Base/baseLoader";
    import {mapActions, mapState} from "vuex";

    export default {
        name: "gallery",
        components: {
            Paginate,
            GalleryList,
            baseLoader
        },
        mounted() {
            this.pageNum = Number(this.$route.params.id)
            this.loadImg(this.pageNum)
        },
        data() {
            return {
                pageNum: 1,
                perPage: 6,
                totalFound: 36,
            }
        },
        computed: {
            ...mapState("gallery", ["images"]),
        },
        methods: {
            ...mapActions("gallery", ["getImages"]),
            loadPage(event) {
                this.$router.push({
                    name: "Gallery",
                    params: {
                        id: event,
                    },
                });
                this.loadImg(event)
            },
            loadImg(page) {
                const client_id = "3r8CIWg9-7z66Y2_s3f1uWcF6YF71NMUc8R-ekBMOzY";
                const per_page = 4;

                this.getImages({
                    client_id: client_id,
                    per_page: per_page,
                    page: page,
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.gallery {
    max-width: 680px;
    margin: 0 auto;
    &--paginate {
        text-align: center;
        .pagination {
            display: inline-block;
            font-size: 15px;
            padding: 0;
            margin: 0;
            list-style: none;
            ::v-deep li {
                outline: none;
                min-width: 31px;
                background-color: #fff;
                border-color: #d8d8d8;
                cursor: default;
                position: relative;
                float: left;
                line-height: 1.4;
                text-decoration: none;
                border: 1px solid #d8d8d8;
                margin-left: -1px;
                &:hover {
                    background-color: #f2f1f0;
                }
                &.active {
                    background-color: #edeceb;
                    border-color: #d8d8d8;
                    cursor: default;
                    outline: none;
                }
                a {
                    font-size: 15px;
                    line-height: 2;
                    display: block;
                    text-align: center;
                    color: #444;
                    text-decoration: none;
                    outline: none;
                }
                &:last-child {
                    border-radius: 0 3px 3px 0;
                }
                &:first-child {
                    border-radius: 3px 0 0 3px;
                }
                &:nth-child(4) ~ .disabled + li {
                    display: none;
                }
            }
        }
    }
}
</style>