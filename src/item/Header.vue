<template>
	<nb-header class="header" androidStatusBarColor="green">
		<status-bar bar-style="light-content" background-color="green" :translucent="false"></status-bar>
		<nb-left>
			<nb-button transparent :on-press="() => navigation.goBack()">
				<nb-icon name="arrow-back" />
			</nb-button>
		</nb-left>
		<nb-body>
			<nb-title><cus-text color="light" weight="semi-bold" size="md">{{ title }}</cus-text></nb-title>
		</nb-body>
		<nb-right />
	</nb-header>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: { CusText },
		props: ['title', 'navigation'],
	}
</script>

<style scoped>
	.header {
		background-color: green;
		margin-bottom: 20;
	}
</style>