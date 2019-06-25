<template>
	<nb-view class="wrapper">
		<nb-view class="header">
			<cus-text size="sm" color="dark" weight="semi-bold">{{ source }}</cus-text>
		</nb-view>
		<nb-view class="content">
			<slot></slot>
		</nb-view>
	</nb-view>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: {
			CusText
		},
		props: ['source']
	}
</script>

<style scoped>
	.wrapper {
		border-radius: 5;
		width: 100%;
		margin-bottom: 10;
	}
	.header {
		background-color: #eee;
		width: 100%;
		align-items: center;
		padding: 10;
	}
	.content {
		background-color: #f5f5f5;
		width: 100%;
		padding: 10;
	}
</style>