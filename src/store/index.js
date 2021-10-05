import Vue from 'vue'
import Vuex from 'vuex'

import main from "./modules/main";
import articles from "./modules/articles";
import gallery from "./modules/gallery";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    articles,
    gallery
  },

  state: {
  },
  mutations: {
  },
  actions: {
  },
})
