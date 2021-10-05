import axios from 'axios'

const state = {
    images: []
};

const getters = {
    images: (state) => {
        if (state.images.length <= 0) return [];
        return state.images.map(item => {
            return {
                link: item.user.links.html || '',
                authorImg: item.user.profile_image.small || '',
                name: item.user.name || '',
                userName: item.user.username || '',
                regular: item.urls.regular || '',
                altDescription: item.alt_description || '',
                likes: item.likes || ''
            }
        });
    },
};

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
