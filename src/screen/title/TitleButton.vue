<template>
	<touchable-opacity :on-press="() => navigate()">
		<nb-view class="button-wrapper">
			<nb-icon type="FontAwesome5" :name="icon" class="button-icon"></nb-icon>
			<cus-text color="light" size="sm" weight="bold">{{ title }}</cus-text>
		</nb-view>
	</touchable-opacity>
</template>

<script>
	import CusText from '../../item/CusText';

	export default {
		components: {
			CusText
		},
		props: ['title', 'icon', 'navigation', 'nav'],
		methods: {
			navigate() {
				let nav = this.nav;
				this.navigation.navigate(nav);
			}
		}
	}
</script>

<style scoped>
	.button-wrapper {
		background-color: rgba(240, 255, 240, 0.3);
		border-radius: 5;
		width: 125;
		height: 125;
		justify-content: center;
		align-items: center;
		margin-bottom: 25
	}
	.button-icon {
		color: white;
		font-size: 40;
		margin-bottom: 10;
	}
</style>