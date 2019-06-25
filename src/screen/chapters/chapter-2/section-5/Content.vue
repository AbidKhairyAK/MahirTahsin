<template>
	<nb-container>
		<header title="Muqaddimah Ilmu Tajwid" :navigation="navigation"></header>
		<nb-content class="content">
			<cus-title>Tingkatan/Tempo Bacaan Al-Quran Al-Karim</cus-title>

			<cus-parg>
				In congue nunc a mauris lacinia pellentesque. Nunc sit amet efficitur leo, non interdum quam. Donec rutrum mi eu augue pulvinar ultrices.
			</cus-parg>
			<cus-arab audio="sound1">بسم الله الرحمن الرحيم</cus-arab>

			<cus-list collapse prefix="1" title="Praesent dui neque, maximus id erat ut.">
				<cus-parg>Aliquam ac mauris a nulla aliquam sollicitudin vel et mi. Maecenas sodales mattis gravida.
				</cus-parg>

				<cus-list prefix="a">
					<cus-parg>Donec nisi turpis, dignissim at quam sit amet, porttitor porta lacus.
					</cus-parg>
				</cus-list>
				<cus-list prefix="b">
					<cus-parg>dignissim at quam sit amet, porttitor porta lacus. Nullam ultricies nulla libero, imperdiet suscipit velit dapibus eget.
					</cus-parg>
				</cus-list>
			</cus-list>

			<cus-list collapse prefix="2" title="Nullam ultricies nulla libero, imperdiet suscipit velit dapibus eget.">
				<cus-parg>Aliquam ac mauris a nulla aliquam sollicitudin vel et mi. Maecenas sodales mattis gravida.
				</cus-parg>

				<cus-list prefix="a">
					<cus-parg>Donec nisi turpis, dignissim at quam sit amet, porttitor porta lacus.
					</cus-parg>
				</cus-list>
				<cus-list prefix="b">
					<cus-parg>dignissim at quam sit amet, porttitor porta lacus. Nullam ultricies nulla libero, imperdiet suscipit velit dapibus eget.
					</cus-parg>
				</cus-list>
			</cus-list>

			<cus-list collapse prefix="3" title="Aliquam sollicitudin vel et mi.">
				<cus-parg>Aliquam ac mauris a nulla aliquam sollicitudin vel et mi. Maecenas sodales mattis gravida.
				</cus-parg>

				<cus-list prefix="a">
					<cus-parg>Donec nisi turpis, dignissim at quam sit amet, porttitor porta lacus.
					</cus-parg>
				</cus-list>
				<cus-list prefix="b">
					<cus-parg>dignissim at quam sit amet, porttitor porta lacus. Nullam ultricies nulla libero, imperdiet suscipit velit dapibus eget.
					</cus-parg>
				</cus-list>
			</cus-list>

			<cus-list collapse prefix="4" title="Maecenas sodales mattis gravida.">
				<cus-parg>Aliquam ac mauris a nulla aliquam sollicitudin vel et mi. Maecenas sodales mattis gravida.
				</cus-parg>

				<cus-list prefix="a">
					<cus-parg>Donec nisi turpis, dignissim at quam sit amet, porttitor porta lacus.
					</cus-parg>
				</cus-list>
				<cus-list prefix="b">
					<cus-parg>dignissim at quam sit amet, porttitor porta lacus. Nullam ultricies nulla libero, imperdiet suscipit velit dapibus eget.
					</cus-parg>
				</cus-list>
			</cus-list>
			<nav-tool :navigation="navigation" prev="C2S4Content"></nav-tool>
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
	import NavTool from '../../../../item/NavTool';
	import AudioTool from '../../../../item/AudioTool';

	export default {
		components: {
			Header, CusTitle, CusParg, CusList, CusArab, NavTool, AudioTool
		},
		props: { navigation: Object },
	}
</script>

<style>
	.content {
		padding-left: 15;
		padding-right: 15;
	}
</style>