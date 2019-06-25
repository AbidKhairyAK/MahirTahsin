import Vue from 'vue-native-core';
import Vuex from 'vuex';

import audio from './module/audio';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		audio
	}
})

export default store;