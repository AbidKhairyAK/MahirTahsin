<template>
	<touchable-opacity :on-press="() => navigate()" class="touchable-opacity">
		<nb-view class="button-wrapper">
			<cus-text color="dark" size="sm" weight="semi-bold" align="c">{{ title }}</cus-text>
			<image :source="require('../../assets/img/side-vintage.png')" class="ornament o-left"></image>
			<image :source="require('../../assets/img/side-vintage.png')" class="ornament o-right"></image>
		</nb-view>
	</touchable-opacity>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: { CusText },
		props: ['title', 'navigation', 'nav'],
		methods: {
			navigate() {
				this.navigation.navigate(this.nav);
			}
		}
	}
</script>

<style scoped>
	.touchable-opacity {
		margin-bottom: 20;
	}
	.button-wrapper {
		width: 95%;
		height: 60;
		padding-left: 25;
		padding-right: 25;
		background-color: white;
		border-radius: 5;
		align-self: center;
		justify-content: center;
		elevation: 1;
	}
	.ornament {
		position: absolute;
		/*width: 40;
		height: 60;*/
		width: 60;
		height: 28;
	}
	.o-right {
		bottom: 17; right: -20;
		transform: rotate(90deg) rotateX(180deg);
	}
	.o-left {
		bottom: 17; left: -20;
		transform: rotate(90deg);
	}
</style>