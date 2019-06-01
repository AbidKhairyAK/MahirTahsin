<template>
	<nb-container class="container">
		<bg></bg>
		<header title="Daftar Tab" :navigation="navigation"></header>
		<nb-content padder>
			<flat-list
				:data="data.titles"
				:key-extractor="(item, index) => item.id"
			>
				<chapter-item render-prop-fn="renderItem" :title="args.item.title" :id="args.item.id" :navigation="navigation"></chapter-item>
			</flat-list>
		</nb-content>
	</nb-container>
</template>

<script>
	import Header from '../../item/Header';
	import Bg from '../../item/Bg';
	import ChapterItem from '../../item/ChapterItem';
	import data from '../../data/chapters.json';

	export default {
		components: {
			Header,
			Bg,
			ChapterItem
		},
		props: {
			navigation: Object
		},
		data: () => ({
			data: data,
		})
	}
</script>

<style>
	.container {
		background-color: #eee;
	}
</style>