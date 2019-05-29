<template>
	<touchable-opacity :on-press="() => navigate()">
		<nb-view class="button-wrapper">
			<nb-icon type="FontAwesome5" :name="icon" class="button-icon"></nb-icon>
			<cus-text color="light" size="sm" weight="bold" align="c">{{ title }}</cus-text>
		</nb-view>
	</touchable-opacity>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: {
			CusText
		},
		props: ['title', 'icon', 'navigation', 'nav'],
		methods: {
			navigate() {
				this.navigation.navigate(this.nav);
			}
		}
	}
</script>

<style scoped>
	.button-wrapper {
		background-color: rgba(230, 255, 230, 0.2);
		border-radius: 10;
		width: 125;
		height: 125;
		justify-content: center;
		align-items: center;
		margin-bottom: 25;
		elevation: 1;
	}
	.button-icon {
		color: white;
		font-size: 40;
		margin-bottom: 10;
	}
</style>