<template>
	<nb-container>
		<header title="Keutamaan Al-Quran Al-Karim" :navigation="navigation"></header>
		<nb-content class="content">
			<cus-title>Keutamaan Membaca Al-Quran</cus-title>

			<cus-parg>
				Nulla a lacinia diam, vitae mollis neque. Aenean fermentum nisl ac sem mattis, eget porta ex iaculis. Maecenas ut massa in lectus vulputate convallis eget vel tellus. Mauris eget finibus tortor, nec faucibus arcu. Cras laoreet leo sed congue tristique. Donec at arcu nibh. Vivamus imperdiet mi elit, in molestie ligula efficitur pretium. Mauris sit amet erat consequat, tristique mauris quis, iaculis metus. Aliquam erat volutpat.
			</cus-parg>
			<cus-parg>
				Sed a vestibulum diam. Nulla nibh felis, eleifend vitae lectus et, lacinia finibus lectus. Aliquam ac mauris a nulla aliquam sollicitudin vel et mi. Maecenas sodales mattis gravida. Nam interdum, massa non convallis sodales, leo ex pretium mi, quis tempor libero lorem id lorem. Praesent dui neque, maximus id erat ut, accumsan hendrerit elit. Ut sollicitudin quam ante, aliquet pulvinar dolor pharetra at.
			</cus-parg>
			<cus-parg>
				Donec nisi turpis, dignissim at quam sit amet, porttitor porta lacus. Nullam ultricies nulla libero, imperdiet suscipit velit dapibus eget. Ut risus lacus, mollis a blandit at, feugiat a felis. Vestibulum in eleifend orci. Aliquam ut volutpat sem.
			</cus-parg>
			<cus-parg>
				Follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. give you the background that you need to dive deeper into the more advanced parts of React Navigation.
			</cus-parg>
			<cus-parg>
				Donec vitae fringilla tellus. Nunc tortor velit, venenatis aliquet venenatis vitae, consequat nec leo. Pellentesque in tincidunt orci, eget convallis libero. Vivamus pretium purus sit amet commodo auctor. Ut posuere, magna sit amet tempor dictum, eros ipsum sodales urna, ac varius arcu est in mauris. In a blandit elit, mattis eleifend mi.
			</cus-parg>
			<nav-tool :navigation="navigation" prev="C1S1Content"></nav-tool>
		</nb-content>
	</nb-container>
</template>

<script>
	import Header from '../../../../item/Header';
	import CusTitle from '../../../../item/CusTitle';
	import CusParg from '../../../../item/CusParg';
	import NavTool from '../../../../item/NavTool';

	export default {
		components: {
			Header, CusTitle, CusParg, NavTool
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