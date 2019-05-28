<template>
	<nb-text :style="{ fontFamily: textWeight, color: textColor, fontSize: textSize, textAlign: 'center' }">
		<slot></slot>
	</nb-text>
</template>

<script>
	export default {
		name: 'CusText',
		props: {
			weight: 'black' | 'semi-bold' | 'bold' | 'bold-italic' | 'light' | 'light-italic' | 'italic',
			color: 'light' | 'dark' | 'primary' | 'secondary' | String,
			size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | Number,
		},
		computed: {
			font() {
				return 'SourceSansPro' + '-';
			},
			textWeight() {
				switch(this.weight) {
					case 'black': return this.font + 'Black'; break; 
					case 'semi-bold': return this.font + 'SemiBold'; break; 
					case 'bold': return this.font + 'Bold'; break; 
					case 'bold-italic': return this.font + 'BoldItalic'; break; 
					case 'light': return this.font + 'Light'; break; 
					case 'light-italic': return this.font + 'LightItalic'; break; 
					case 'italic': return this.font + 'Italic'; break; 
					default: return this.font + 'Regular'; break;
				}
			},
			textColor() {
				switch(this.color) {
					case 'light': return '#efe'; break;
					case 'dark': return '#333'; break;
					case 'primary': return '#efe'; break;
					case 'secondary': return '#cdc'; break;
					default: return this.color; break;
				}
			},
			textSize() {
				switch(this.size) {
					case 'xs': return 10 + 1; break;
					case 'sm': return 14 + 1; break;
					case 'md': return 19 + 1; break;
					case 'lg': return 24 + 1; break;
					case 'xl': return 30 + 1; break;
					default: return this.size; break;
				}
			}
		}
	}
</script>