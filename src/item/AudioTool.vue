<template>
	<nb-view class="container" v-if="audioStatus != 'NONE'">
		<touchable-opacity :on-press="() => playAudio()" v-if="audioStatus == 'READY'">
			<nb-view class="icon-wrapper">
				<nb-icon class="icon" type="FontAwesome5" name="play"></nb-icon>
			</nb-view>
		</touchable-opacity>
		<touchable-opacity :on-press="() => stopAudio()" v-if="audioStatus == 'PLAYING'">
			<nb-view class="icon-wrapper">
				<nb-icon class="icon" type="FontAwesome5" name="stop"></nb-icon>
			</nb-view>
		</touchable-opacity>
		<nb-view class="text-wrapper">
			<nb-text v-if="audioStatus == 'READY'" class="text">Putar Audio</nb-text>
			<nb-text v-if="audioStatus == 'PLAYING'" class="text">Stop Audio</nb-text>
		</nb-view>
		<touchable-opacity :on-press="() => closeAudio()">
			<nb-view class="exit-wrapper">	
				<nb-icon class="exit" type="FontAwesome5" name="times"></nb-icon>
			</nb-view>
		</touchable-opacity>
	</nb-view>
</template>

<script>
	export default {
		computed: {
			audioStatus() {
				return this.$store.state.audio_status;
			}
		},
		methods: {
			playAudio() {
				this.$store.dispatch('playAudio');
			},
			stopAudio() {
				this.$store.dispatch('stopAudio');
			},
			closeAudio() {
				this.$store.dispatch('closeAudio');
			},
		}
	}
</script>

<style scoped>
	.container {
		padding: 5;
		background-color: #063;
		elevation: 2;
		border-radius: 25;
		position: absolute;
		bottom: 20;
		flex-direction: row;
		align-items: center;
		align-self: center;
	}
	.icon-wrapper {
		background-color: #fff;
		border-radius: 25;
		width: 30; height: 30;
		justify-content: center;
		align-items: center;
	}
	.icon {
		font-size: 15;
		color: #063;
	}
	.text-wrapper {
		width: 100;
		justify-content: center;
		align-items: center;
	}
	.text {
		color: #fff;
		font-size: 12;
		font-family: 'SourceSansPro-Regular';
	}
	.exit {
		font-size: 12;
		width: 15; height: 15;
		color: #fff;
	}
</style>