import Vue from 'vue-native-core';
import Vuex from 'vuex';
import Sound from 'react-native-sound';

Vue.use(Vuex);

const state = {
	audio_status: 'NONE',
	audio_name: '',
	current_audio: null,
};

const mutations = {
	SET_CURRENT_AUDIO(state, payload) {
		state.current_audio = payload;
	},
	SET_AUDIO_STATUS(state, payload) {
		state.audio_status = payload;
	},
	SET_AUDIO_NAME(state, payload) {
		state.audio_name = payload;
	}
};

const actions = {
	setAudio(context, source) {
		if (context.state.audio_status != 'NONE') {
			context.dispatch('closeAudio');
		}
		let audio = new Sound(source+'.mp3', Sound.MAIN_BUNDLE, (error) => {
			if (error) {
				alert(JSON.stringify(error));
				return;
			}
			context.commit("SET_CURRENT_AUDIO", audio);
			context.commit("SET_AUDIO_NAME", source);
			context.commit("SET_AUDIO_STATUS", 'READY');
		});
	},
	playAudio(context) {
		context.state.current_audio.play(() => {
			context.dispatch('closeAudio');
		});
		context.commit("SET_AUDIO_STATUS", 'PLAYING');
	},
	stopAudio(context) {
		context.state.current_audio.stop();
		context.commit("SET_AUDIO_STATUS", 'READY');
	},
	closeAudio(context) {
		if (context.state.audio_status != 'NONE') {
			if (context.state.audio_status == 'PLAYING') {
				context.dispatch('stopAudio');
			}
			context.state.current_audio.release();
			context.commit("SET_CURRENT_AUDIO", null);
			context.commit("SET_AUDIO_STATUS", 'NONE');
			context.commit("SET_AUDIO_NAME", '');
		}
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	actions
});

export default store;