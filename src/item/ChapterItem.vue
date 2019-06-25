<template>
	<touchable-opacity :on-press="() => navigate()" class="touchable-opacity">
		<nb-view class="button-wrapper">
			<image :source="require('../../assets/img/corner-wedding.png')" class="corner corner-left"></image>
			<cus-text color="dark" size="sm" weight="semi-bold" align="c">{{ title }}</cus-text>
			<image :source="require('../../assets/img/corner-wedding.png')" class="corner corner-right"></image>
		</nb-view>
	</touchable-opacity>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: { CusText },
		props: ['id','title', 'navigation'],
		methods: {
			navigate() {
				this.navigation.navigate('SectionList', {
					id: this.id,
					title: this.title,
				});
			}
		}
	}
</script>

<style scoped>
	.touchable-opacity {
		margin-bottom: 20;
	}
	.button-wrapper {
		padding: 30;
		width: 95%;
		background-color: white;
		border-radius: 5;
		align-self: center;
		elevation: 1;
	}
	.corner {
		position: absolute;
		width: 43;
		height: 60;
		/*width: 48;*/
		/*height: 67;*/
	}
	.corner-left {
		top: 5; left: 5;
	}
	.corner-right {
		bottom: 5; right: 5;
		transform: rotateX(180deg) rotateY(180deg);
	}
</style>