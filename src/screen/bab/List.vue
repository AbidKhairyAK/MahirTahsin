<template>
	<nb-container class="container">
		<header title="Daftar Bab" :navigation="navigation"></header>
		<nb-content padder>
			<flat-list
				:data="api"
				:key-extractor="(item, index) => index.toString()"
			>
				<bab-item render-prop-fn="renderItem" :title="args.item.title" :navigation="navigation"></bab-item>
			</flat-list>
		</nb-content>
	</nb-container>
</template>

<script>
	import Header from '../../item/Header';
	import BabItem from '../../item/BabItem';

	export default {
		components: {
			Header,
			BabItem
		},
		props: {
			navigation: Object
		},
		data: () => ({
			api: [
				{title: 'Keutamaan Al-Quran Al-Karim'},
				{title: 'Muqaddimah Ilmu Tajwid'},
				{title: "Isti'adzah dan Basmalah"},
				{title: 'Tajwid, Makhraj, dan Sifat-Sifat Huruf'},
				{title: 'Makhraj dan Sifat Setiap Huruf'},
			]
		}),
	}
</script>

<style>
	.container {
		background-color: #eef3ee;
	}
</style>