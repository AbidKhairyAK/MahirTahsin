<template>
	<nb-container>
		<header title="Makhraj dan Sifat Setiap Huruf" :navigation="navigation"></header>
		<nb-content class="content">
			<cus-title>Makhraj Hamzah ( ء )</cus-title>

			<cus-parg>
				Sed a vestibulum diam. Nulla nibh felis, eleifend vitae lectus et, lacinia finibus lectus. Aliquam ac mauris a nulla aliquam sollicitudin vel et mi. Maecenas sodales mattis gravida. Nam interdum, massa non convallis sodales, leo ex pretium mi, quis tempor libero lorem id lorem. Praesent dui neque, maximus id erat ut, accumsan hendrerit elit. Ut sollicitudin quam ante, aliquet pulvinar dolor pharetra at.
			</cus-parg>

			<cus-list prefix="A" title="Contoh Kata">
				<cus-ex-word title_indo="Dengan Fathah" title_arab="خَ">
					<cus-arab audio="sound1">خَضْرَاء</cus-arab>
					<cus-arab audio="sound2">الخَمِيْسِ</cus-arab>
					<cus-arab audio="sound3">أَخْضَر</cus-arab>
					<cus-arab audio="sound4">الخَامِسَةُ</cus-arab>
				</cus-ex-word>
			</cus-list>

			<cus-list prefix="B" title="Contoh Ayat">
				<cus-ex-ayat source="QS. Az-Zumar : 31">
					<cus-arab audio="sound5">ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ عِنْدَ رَبِّكُمْ تَخْتَصِمُونَ</cus-arab>
				</cus-ex-ayat>
				<cus-ex-ayat source="QS. Az-Ankabut : 30">
					<cus-arab audio="sound6">قَالَ رَبِّ انْصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ</cus-arab>
				</cus-ex-ayat>
				<cus-ex-ayat source="QS. Az-Zumar : 31">
					<cus-arab audio="sound7">ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ عِنْدَ رَبِّكُمْ تَخْتَصِمُونَ</cus-arab>
				</cus-ex-ayat>
				<cus-ex-ayat source="QS. Az-Ankabut : 30">
					<cus-arab audio="sound8">قَالَ رَبِّ انْصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ</cus-arab>
				</cus-ex-ayat>
				<cus-ex-ayat source="QS. Az-Zumar : 31">
					<cus-arab audio="sound9">ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ عِنْدَ رَبِّكُمْ تَخْتَصِمُونَ</cus-arab>
				</cus-ex-ayat>
				<cus-ex-ayat source="QS. Az-Ankabut : 30">
					<cus-arab audio="sound10">قَالَ رَبِّ انْصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ</cus-arab>
				</cus-ex-ayat>
			</cus-list>
			<nav-tool :navigation="navigation" next="C5S2Content"></nav-tool>
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
	import CusExWord from '../../../../item/CusExWord';
	import CusExAyat from '../../../../item/CusExAyat';
	import AudioTool from '../../../../item/AudioTool';
	import NavTool from '../../../../item/NavTool';

	export default {
		components: {
			Header, CusTitle, CusParg, CusList, CusArab, AudioTool, CusExWord, CusExAyat, NavTool
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