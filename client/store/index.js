import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        connectedUserName: '',
        usersData: {}
    },
    mutations: {
        setUserName (state, payload) {
            state.connectedUserName = payload
        },
        getUsersData (state, payload) {
            state.usersData = payload
        }
    },
    plugins: [createPersistedState()]
})