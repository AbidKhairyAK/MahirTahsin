<template>
	<nb-container>
		<header title="Muqaddimah Ilmu Tajwid" :navigation="navigation"></header>
		<nb-content class="content">
			<cus-title>Pengertian Ilmu Tajwid</cus-title>

			<cus-parg>
				Sed a vestibulum diam. Nulla nibh felis, eleifend vitae lectus et, lacinia finibus lectus. Aliquam ac mauris a nulla aliquam sollicitudin vel et mi. Maecenas sodales mattis gravida. Nam interdum, massa non convallis sodales, leo ex pretium mi, quis tempor libero lorem id lorem. Praesent dui neque, maximus id erat ut, accumsan hendrerit elit. Ut sollicitudin quam ante, aliquet pulvinar dolor pharetra at.
			</cus-parg>
			<cus-arab audio="sound4">بسم الله الرحمن الرحيم</cus-arab>

			<cus-list collapse prefix="1" title="Praesent dui neque, maximus id erat ut.">
				<cus-parg>Aliquam ac mauris a nulla aliquam sollicitudin vel et mi. Maecenas sodales mattis gravida.
				</cus-parg>

				<cus-list prefix="a">
					<cus-parg>Donec nisi turpis, dignissim at quam sit amet, porttitor porta lacus.
					</cus-parg>
					<cus-arab audio="sound1">بسم الله الرحمن الرحيم</cus-arab>
				</cus-list>
				<cus-list prefix="b">
					<cus-parg>dignissim at quam sit amet, porttitor porta lacus. Nullam ultricies nulla libero, imperdiet suscipit velit dapibus eget.
					</cus-parg>
					<cus-arab audio="sound2">بسم الله الرحمن الرحيم</cus-arab>
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
			<nav-tool :navigation="navigation" next="C2S2Content"></nav-tool>
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