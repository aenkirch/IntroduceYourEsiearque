import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        connectedUserName: ''
    },
    mutations: {
        setUserName (state, payload) {
        state.connectedUserName = payload
        }
    }
})