<template>
	<nb-container class="container">
		<bg></bg>
		<header :title="chapter.title" :navigation="navigation"></header>
		<nb-content padder>
			<flat-list
				:data="data['chapter'+chapter.id]"
				:key-extractor="(item, index) => item.id"
			>
				<section-item render-prop-fn="renderItem" :title="args.item.title" :navigation="navigation" :nav="'C'+chapter.id+'S'+args.item.id+'Content'"></section-item>
			</flat-list>
		</nb-content>
	</nb-container>
</template>

<script>
	import Header from '../../item/Header';
	import Bg from '../../item/Bg';
	import SectionItem from '../../item/SectionItem';
	import data from '../../data/chapters.json';

	export default {
		components: {
			Header,
			Bg,
			SectionItem
		},
		props: { navigation: Object },
		data: () => ({
			data: data,
		}),
		computed: {
			chapter() {
				const { params } = this.navigation.state;
				return params ? params : {};
			},
		}
	}
</script>

<style>
	.container {
		background-color: #eee;
	}
</style>