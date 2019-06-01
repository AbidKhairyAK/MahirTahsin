<template>
	<nb-header class="header" androidStatusBarColor="#005c2c">
		<status-bar bar-style="light-content" background-color="#005c2c" :translucent="false"></status-bar>
		<nb-left class="left">
			<nb-button transparent :on-press="() => goBack()">
				<nb-icon type="MaterialIcons" name="navigate-before" />
			</nb-button>
		</nb-left>
		<nb-body class="body">
			<nb-title class="title">
				<cus-text color="light" weight="black" :size="17" align="c">{{ title }}</cus-text>
			</nb-title>
		</nb-body>
		<nb-right class="right">
		</nb-right>
	</nb-header>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: { CusText },
		props: ['title', 'navigation'],
		methods: {
			goBack() {
				this.$store.dispatch('closeAudio');
				this.navigation.goBack();
			}
		}
	}
</script>

<style scoped>
	.header {
		background-color: #063;
		margin-bottom: 15;
	}
	.title {
		align-self: center;
		margin: 0;
		padding: 0;
	}
	.body {
		flex: 7;
	}
	.right {
		flex: 1;
	}
	.left {
		flex: 1;
	}
</style>