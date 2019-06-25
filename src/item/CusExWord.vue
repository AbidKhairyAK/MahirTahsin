<template>
	<nb-view class="wrapper">
		<nb-view class="header">
			<cus-text class="title" size="sm" color="dark" weight="semi-bold">{{ title_indo }} ( </cus-text><cus-arab class="arab" size="sm"> {{ title_arab }}</cus-arab><cus-text class="title" size="sm" color="dark" weight="semi-bold"> )</cus-text>
		</nb-view>
		<nb-view class="content">
			<slot></slot>
		</nb-view>
	</nb-view>
</template>

<script>
	import CusText from './CusText';
	import CusArab from './CusArab';

	export default {
		components: {
			CusText, CusArab
		},
		props: ['title_indo', 'title_arab']
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
		flex-direction: row;
		justify-content: center;
		padding-top: 10;
	}
	.content {
		background-color: #f5f5f5;
		width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 10;
	}
	.arab {
		margin-top: -5;
		margin-left: 3;
	}
</style>