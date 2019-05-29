<template>
	<nb-container class="container">
		<status-bar bar-style="light-content" background-color="transparent" :translucent="true"></status-bar>
		<nb-view class="container">
			<image-background class="main-bg"
				:source="require('../../assets/img/green-bg.jpg')"
				:blur-radius="2"
			>
				<nb-view class="overlay"></nb-view>
				<nb-view class="title-wrapper">
					<cus-text weight="black" color="light" size="xl">MAHIR TAHSIN</cus-text>
					<cus-text weight="bold" color="light" size="md">PANDUAN ILMU TAJWID</cus-text>
					<nb-view class="underline">
						<nb-view class="underline-top"></nb-view>
						<nb-view class="underline-bottom"></nb-view>
					</nb-view>
					<cus-text weight="italic" color="light" size="sm">~ Sederhana, Praktis, & Mudah Dipahami ~</cus-text>
				</nb-view>
				<nb-view class="button-wrapper">
					<title-item icon="book" :navigation="navigation" nav="ChapterList" title="Mulai Belajar"></title-item>
					<title-item icon="cogs" :navigation="navigation" nav="Config" title="Pengaturan"></title-item>
					<title-item icon="question" :navigation="navigation" nav="About" title="Tentang Aplikasi"></title-item>
					<title-item icon="exclamation-triangle" :navigation="navigation" nav="Report" title="Lapor Kesalahan"></title-item>
				</nb-view>
			</image-background>
		</nb-view>
	</nb-container>
</template>

<script>
	import TitleItem from '../item/TitleItem';
	import CusText from '../item/CusText';

	export default {
		components: {
			TitleItem,
			CusText
		},
		props: {
			navigation: Object
		},
	}
</script>

<style scoped>
	.container {
		flex: 1;
		background-color: #020;
	}
	.main-bg {
		flex: 1;
		resizeMode: cover;
	}
	.overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: black;
		opacity: 0.2;
	}
	.title-wrapper {
		flex: 3;
		justify-content: center;
		align-items: center;
	}
	.button-wrapper {
		flex: 3;
		justify-content: space-around;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 25
	}
	.underline {
		margin-top: 5;
		margin-bottom: 20;
		justify-content: center;
		align-items: center;
	}
	.underline-top {
		border-bottom-color: white;
		border-bottom-width: 3;
		width: 210;
		margin: 3;
	}
	.underline-bottom {
		border-bottom-color: white;
		border-bottom-width: 2;
		width: 205;
	}
</style>