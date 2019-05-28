<template>
	<touchable-opacity :on-press="() => navigation.navigate('Title')">
		<nb-view class="button-wrapper">
			<image :source="require('../../assets/img/corner-wedding.png')" class="corner-left"></image>
			<cus-text color="dark" size="sm" weight="semi-bold">{{ title }}</cus-text>
			<image :source="require('../../assets/img/corner-wedding.png')" class="corner-right"></image>
		</nb-view>
	</touchable-opacity>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: { CusText },
		props: ['title', 'navigation']
	}
</script>

<style scoped>
	.button-wrapper {
		padding: 25;
		width: 95%;
		margin-bottom: 25;
		background-color: white;
		border-radius: 5;
		align-self: center;
		elevation: 2;
	}
	.corner-left {
		position: absolute;
		top: 5; left: 5;
		width: 43;
		height: 60;
	}
	.corner-right {
		position: absolute;
		top: 5; right: 5;
		width: 43;
		height: 60;
		transform: rotateX(180deg) rotateY(180deg);
	}
</style>