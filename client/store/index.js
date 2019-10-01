import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        connectedUserName: ''
    },
    mutations: {
        setUserName (state, payload) {
        state.connectedUserName = payload
        }
    },
    plugins: [createPersistedState()]
})