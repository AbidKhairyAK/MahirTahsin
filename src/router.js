import { StackNavigator } from 'vue-native-router';

import Title from './screen/Title.vue';
import ChapterList from './screen/chapters/ChapterList.vue';
import SectionList from './screen/chapters/SectionList.vue';

import C1S1Content from './screen/chapters/chapter-1/section-1/Content.vue';

const AppNavigation = StackNavigator(
	{
		Title,
		ChapterList,
		SectionList,

		C1S1Content,
	},
	{
		initialRouteName: 'Title',
		headerMode: 'none',
	}
);

export default AppNavigation;