import { StackNavigator } from 'vue-native-router';

import Title from './screen/title/Index.vue';
import BabList from './screen/bab/List.vue';

const AppNavigation = StackNavigator(
	{
		Title,
		BabList,
	},
	{
		initialRouteName: 'BabList',
		headerMode: 'none',
	}
);

export default AppNavigation;