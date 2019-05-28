<template>
	<nb-container class="container">
		<status-bar bar-style="light-content" background-color="transparent" :translucent="true"></status-bar>
		<nb-view class="container">
			<image-background class="main-bg"
				:source="require('../../../assets/img/green-bg.jpg')"
				:blur-radius="2"
			>
				<!-- <nb-view class="overlay"></nb-view> -->
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
					<title-button icon="book" :navigation="navigation" nav="BabList" title="Mulai Belajar"></title-button>
					<title-button icon="cogs" :navigation="navigation" nav="BabList" title="Pengaturan"></title-button>
					<title-button icon="question" :navigation="navigation" nav="BabList" title="Tentang Aplikasi"></title-button>
					<title-button icon="exclamation-triangle" :navigation="navigation" nav="BabList" title="Lapor Kesalahan"></title-button>
				</nb-view>
			</image-background>
		</nb-view>
	</nb-container>
</template>

<script>
	import { Dimensions } from 'react-native';
	import TitleButton from './TitleButton';
	import CusText from '../../item/CusText';

	export default {
		components: {
			TitleButton,
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