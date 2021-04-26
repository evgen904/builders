import { Articles } from "@/api/index.js";
import Vue from "vue";

const state = {
    articles: []
};

const getters = {};

const actions = {
    getArticles({ commit }) {
        Articles.getArticles()
            .then((response) => {
                if (response?.data) {
                    commit('setArticles', response.data)
                }
            })
            .catch((error) => {
                console.log("Ajax error: ", error);
            });
    },
};

const mutations = {
    setArticles(state, value) {
        state.articles = value;
    }
};

export default {
    namespaced: true,
    namespace: "articles",
    state,
    getters,
    actions,
    mutations
};
