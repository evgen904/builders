import { News } from "@/api/index.js";
import Vue from "vue";

const state = {
    news: []
};

const getters = {};

const actions = {
    getNews({ commit }) {
        News.getNews()
            .then((response) => {
                if (response?.data) {
                    commit('setNews', response.data)
                }
            })
            .catch((error) => {
                console.log("Ajax error: ", error);
            });
    },
};

const mutations = {
    setNews(state, value) {
        state.news = value;
    }
};

export default {
    namespaced: true,
    namespace: "main",
    state,
    getters,
    actions,
    mutations
};
