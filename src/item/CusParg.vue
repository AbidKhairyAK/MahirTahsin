<template>
		<cus-text size="sm" color="dark" class="text">
			<slot></slot>
		</cus-text>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: { CusText }
	}
</script>

<style scoped>
	.text {
		margin-bottom: -10;
		line-height: 23;
	}
</style>