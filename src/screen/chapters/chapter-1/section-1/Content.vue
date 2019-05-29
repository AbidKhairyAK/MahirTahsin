<template>
	<nb-container>
		<header title="Keutamaan Membaca Al-Quran" :navigation="navigation"></header>
		<nb-content>
			<nb-text>test</nb-text>
		</nb-content>
	</nb-container>
</template>

<script>
	import Header from '../../../../item/Header';

	export default {
		components: {
			Header
		},
		props: { navigation: Object }
	}
</script>