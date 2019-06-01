<template>
	<nb-container>
		<header title="Isti'adzah dan Basmalah" :navigation="navigation"></header>
		<nb-content class="content">
			<cus-title>Hukum Isti'adzah</cus-title>

			<cus-parg>
				What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should be enough for you know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.
			</cus-parg>

			<cus-list collapse prefix="1" title="How to build your typical small mobile application">
				<cus-parg>What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation.
				</cus-parg>

				<cus-list prefix="a">
					<cus-parg>What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation.
					</cus-parg>
					<cus-arab audio="sound1">بسم الله الرحمن الرحيم</cus-arab>
					<cus-arab audio="sound2">بسم الله الرحمن الرحيم</cus-arab>
				</cus-list>
				<cus-list prefix="b">
					<cus-parg>What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation.
					</cus-parg>
				</cus-list>
			</cus-list>

			<cus-list collapse prefix="2" title="Fundamentals section of this documentation is a tour">
				<cus-parg>What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation.
				</cus-parg>

				<cus-list prefix="a">
					<cus-parg>What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation.
					</cus-parg>
				</cus-list>
				<cus-list prefix="b">
					<cus-parg>What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation.
					</cus-parg>
				</cus-list>
			</cus-list>
			
		</nb-content>
		<audio-tool></audio-tool>
	</nb-container>
</template>

<script>
	import Header from '../../../../item/Header';
	import CusTitle from '../../../../item/CusTitle';
	import CusParg from '../../../../item/CusParg';
	import CusList from '../../../../item/CusList';
	import CusArab from '../../../../item/CusArab';
	import AudioTool from '../../../../item/AudioTool';

	export default {
		components: {
			Header, CusTitle, CusParg, CusList, CusArab, AudioTool
		},
		props: { navigation: Object }
	}
</script>

<style>
	.content {
		padding-left: 15;
		padding-right: 15;
	}
</style>