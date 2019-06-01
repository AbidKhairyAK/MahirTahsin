<template>
	<nb-view class="wrapper">
		<image v-if="divider" :source="require('../../assets/img/bottom-simple2.png')" class="divider-top"></image>
		<cus-text size="md" color="dark" align="c" weight="bold" class="text">
			<slot></slot>
		</cus-text>
	</nb-view>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: {
			CusText,
		},
		props: {
			divider: {type: Boolean, default: true}
		},
	}
</script>

<style scoped>
	.wrapper {
		align-items: center;
		margin-bottom: 25;
	}
	.text {
		margin-top: -5;
	}
	.divider-top {
		width: 200;
		height: 40;
	}
</style>