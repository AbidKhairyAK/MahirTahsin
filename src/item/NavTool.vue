<template>
	<nb-view class="wrapper">
		<touchable-opacity v-if="prev" class="prev" :on-press="() => navigation.replace(prev)">
			<nb-view class="button">
				<nb-icon type="FontAwesome" name="angle-double-left" class="icon"/>
				<cus-text size="xs" color="light"> Sebelumnya</cus-text>
			</nb-view>
		</touchable-opacity>
		<touchable-opacity class="exec" :on-press="() => dev()">
			<nb-view class="button">
				<cus-text size="xs" color="light">Latihan</cus-text>
			</nb-view>
		</touchable-opacity>
		<touchable-opacity v-if="next" class="next" :on-press="() => navigation.replace(next)">
			<nb-view class="button">
				<cus-text size="xs" color="light">Selanjutnya </cus-text>
				<nb-icon type="FontAwesome" name="angle-double-right" class="icon"/>
			</nb-view>
		</touchable-opacity>
	</nb-view>
</template>

<script>
	import CusText from './CusText';

	export default {
		components: {
			CusText
		},
		props: ['prev', 'next', 'exec', 'navigation'],
		methods: {
			dev() {
				alert('on development progress...');
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		width: 100%;
		margin-top: 15;
		padding-bottom: 50;
		/*flex-direction: row;*/
	}
	.button {
		padding: 10;
		background-color: #063;
		border-radius: 5;
		elevation: 1;
		flex-direction: row;
	}
	.icon {
		color: #fff;
		font-size: 13;
		align-self: center;
	}
	.prev { position: absolute; align-self: flex-start; }
	.exec { position: absolute; align-self: center; }
	.next { position: absolute; align-self: flex-end; }
</style>