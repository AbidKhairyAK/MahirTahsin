<template>
	<app-navigation></app-navigation>
</template>

<script>
	import React from 'react';
	import Vue from 'vue-native-core';
	import { VueNativeBase } from 'native-base';
	import AppNavigation from './src/router.js';
	import Store from './src/store.js';

	Vue.use(VueNativeBase);

	Vue.prototype.$store = Store;

	export default {
		components: { AppNavigation }
	}
</script>