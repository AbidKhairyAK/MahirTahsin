<template>
	<nb-container>
		<header title="Keutamaan Al-Quran Al-Karim" :navigation="navigation"></header>
		<nb-content class="content">
			<cus-title>Keutamaan Membaca Al-Quran</cus-title>

			<cus-parg>
				What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should be enough for you know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.
			</cus-parg>
			<cus-parg>
				Now that we know how to create a Stack Navigator with some routes and navigate between those routes, let's look at how we can pass data to routes when we navigate to them.
			</cus-parg>
			<cus-parg>
				Follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. give you the background that you need to dive deeper into the more advanced parts of React Navigation.
			</cus-parg>
			<cus-parg>
				Follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. give you the background that you need to dive deeper into the more advanced parts of React Navigation.
			</cus-parg>
			<cus-parg>
				Follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. give you the background that you need to dive deeper into the more advanced parts of React Navigation.
			</cus-parg>
		</nb-content>
	</nb-container>
</template>

<script>
	import Header from '../../../../item/Header';
	import CusTitle from '../../../../item/CusTitle';
	import CusParg from '../../../../item/CusParg';

	export default {
		components: {
			Header, CusTitle, CusParg
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