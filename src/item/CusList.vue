<template>
	<nb-view class="wrapper">

		<touchable-opacity v-if="collapse" 
			:on-press="() => active = !active"
		>
			<cus-text class="prefix" 
				:style="{ marginLeft: -20 }"
				color="dark" 
				:size="title ? 16 : 'sm'" 
				:weight="title ? 'semi-bold' : 'regular'"
			>{{ prefix }}.</cus-text>
			<cus-text v-if="title"
				class="title no_margin"
				:style="{ marginBottom: -20 }"
				color="dark" 
				:size="16" 
				weight="semi-bold"
			>{{ title }}
			</cus-text>
			<cus-text v-if="!active" :style="{ marginBottom: 10 }" color="dark" size="xs" weight="light">klik untuk selanjutnya >></cus-text>
		</touchable-opacity>

		<cus-text v-if="!collapse"
			class="prefix" 
			color="dark" 
			:size="title ? 16 : 'sm'" 
			:weight="title ? 'semi-bold' : 'regular'"
		>{{ prefix }}.</cus-text>

		<cus-text v-if="title && !collapse"
			class="title"
			color="dark" 
			:size="16" 
			weight="semi-bold"
		>{{ title }}
		</cus-text>

		<nb-view v-if="active">		
			<slot></slot>
		</nb-view>

	</nb-view>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: { CusText },
		props: { 
			prefix: String,
			title: String,
			collapse: Boolean,
			show: Boolean,
		},
		data: () => ({
			active: true
		}),
		created() {
			if (this.collapse) { this.active = false }
		}
	}
</script>

<style scoped>
	.wrapper {
		padding-left: 20;
	}
	.active {
		background-color: #eee;
	}
	.prefix {
		position: absolute;
		left: 0;
		top: 0;
	}
	.title {
		margin-bottom: -10;
		line-height: 23;
	}
</style>