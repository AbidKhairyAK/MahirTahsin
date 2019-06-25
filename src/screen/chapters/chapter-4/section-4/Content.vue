<template>
	<nb-container>
		<header title="Tajwid, Makhraj, dan Sifat-Sifat Huruf" :navigation="navigation"></header>
		<nb-content class="content">
			<cus-title>Sifat-Sifat Huruf yang Berlawanan</cus-title>

			<cus-parg>
				Sed a vestibulum diam. Nulla nibh felis, eleifend vitae lectus et, lacinia finibus lectus. Aliquam ac mauris a nulla aliquam sollicitudin vel et mi. Maecenas sodales mattis gravida. Nam interdum, massa non convallis sodales, leo ex pretium mi, quis tempor libero lorem id lorem. Praesent dui neque, maximus id erat ut, accumsan hendrerit elit. Ut sollicitudin quam ante, aliquet pulvinar dolor pharetra at.
			</cus-parg>
			<cus-arab audio="sound3">بسم الله الرحمن الرحيم</cus-arab>

			<cus-list collapse prefix="1" title="Maecenas sodales mattis gravida.">
				<cus-parg>accumsan hendrerit elit. Ut sollicitudin quam ante, aliquet pulvinar dolor pharetra at.
				</cus-parg>

				<cus-list prefix="a">
					<cus-parg>massa non convallis sodales, leo ex pretium mi, quis tempor libero lorem id lorem.
					</cus-parg>
					<cus-arab audio="sound1">بسم الله الرحمن الرحيم</cus-arab>
					<cus-arab audio="sound2">بسم الله الرحمن الرحيم</cus-arab>
				</cus-list>
				<cus-list prefix="b">
					<cus-parg>Nulla nibh felis, eleifend vitae lectus et.
					</cus-parg>
				</cus-list>
			</cus-list>

			<cus-list collapse prefix="2" title="Fundamentals section of this documentation is a tour">
				<cus-parg>Aliquam ac mauris a nulla aliquam sollicitudin vel et mi.
				</cus-parg>

				<cus-list prefix="a">
					<cus-parg>eleifend vitae lectus et, lacinia finibus lectus. Aliquam ac mauris a nulla aliquam sollicitudin vel et mi. Maecenas.
					</cus-parg>
				</cus-list>
				<cus-list prefix="b">
					<cus-parg>eleifend vitae lectus et, lacinia finibus lectus. Aliquam ac mauris a nulla aliquam sollicitudin vel et mi Maecenas.
					</cus-parg>
				</cus-list>
			</cus-list>
			<nav-tool :navigation="navigation" prev="C4S3Content" next="C4S5Content"></nav-tool>
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
			Header, CusTitle, CusParg, CusList, CusArab, AudioTool, NavTool
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