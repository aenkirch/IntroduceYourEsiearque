import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        connectedUserName: '',
        connectedUserData: {},
        usersData: {}
    },
    mutations: {
        setUserName (state, payload) {
            state.connectedUserName = payload
        },
        setUserData (state, payload) {
            state.connectedUserData = payload
        },
        getUsersData (state, payload) {
            state.usersData = payload
        }
    },
    plugins: [createPersistedState()]
})