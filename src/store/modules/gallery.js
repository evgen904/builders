import axios from 'axios'

const state = {
    images: []
};

const getters = {};

const actions = {
    getImages({ commit }, payload) {
        axios
            .get("https://api.unsplash.com/users/michellem18/photos", {
                params: payload
            })
            .then(response => {
                if (response?.data) {
                    commit('setImages', response.data)
                }
            })
            .catch(error => console.error(error))
    },
};

const mutations = {
    setImages(state, value) {
        state.images = value;
    }
};

export default {
    namespaced: true,
    namespace: "gallery",
    state,
    getters,
    actions,
    mutations
};
