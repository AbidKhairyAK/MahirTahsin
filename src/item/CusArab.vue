<template>
	<nb-text class="arab" selectable :on-press="() => setAudio()" :style="{ fontFamily: font, color: textColor, fontSize: textSize, textAlign: textAlign }">
		<slot></slot>
	</nb-text>
</template>

<script>
	export default {
		props: {
			weight: 'bold' | 'regular',
			color: 'light' | 'dark' | 'primary' | 'secondary',
			size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
			align: 'c' | 'l' | 'r',
			audio: String,
		},
		computed: {
			font() {
				return 'KFGQPCUthmanicScriptHAFS';
			},
			audioStatus() {
				return this.$store.state.audio.audio_status;
			},
			audioName() {
				return this.$store.state.audio.audio_name;
			},
			textColor() {
				if (this.audioName == this.audio) {
					return '#396';
				}
				switch(this.color) {
					case 'light': return '#eee'; break;
					case 'dark': return '#333'; break;
					case 'primary': return '#eee'; break;
					case 'secondary': return '#cdc'; break;
					default: return '#333'; break;
				}
			},
			textSize() {
				switch(this.size) {
					case 'xs': return 11 + 1; break;
					case 'sm': return 14 + 1; break;
					case 'md': return 17 + 1; break;
					case 'lg': return 20 + 1; break;
					case 'xl': return 23 + 1; break;
					default: return 20 + 1; break;
				}
			},
			textAlign() {
				switch(this.align) {
					case 'c': return 'center'; break;
					case 'l': return 'left'; break;
					case 'r': return 'right'; break;
					default: return 'right'; break;
				}
			}
		},
		methods: {
			setAudio() {
				if (this.audio) {
					this.$store.dispatch('audio/setAudio', this.audio);
				}
			}
		},
	}
</script>

<style>
	.arab {
		margin-bottom: 10;
	}
</style>