import Vue from 'vue';
import Vuex from 'vuex';

import core from './core/coreModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core,
  },
});
