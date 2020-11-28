import Vue from 'vue';
import Vuex from 'vuex';
import createCache from 'vuex-cache';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createCache(),
  ],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
