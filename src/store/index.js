import Vue from 'vue'
import Vuex from 'vuex'

import main from "./modules/main";
import articles from "./modules/articles";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    articles
  },

  state: {
  },
  mutations: {
  },
  actions: {
  },
})
