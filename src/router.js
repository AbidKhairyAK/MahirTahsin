import { StackNavigator } from 'vue-native-router';

import Title from './screen/Title.vue';
import ChapterList from './screen/chapters/ChapterList.vue';
import SectionList from './screen/chapters/SectionList.vue';

import C1S1Content from './screen/chapters/chapter-1/section-1/Content.vue';
import C1S2Content from './screen/chapters/chapter-1/section-2/Content.vue';

import C2S1Content from './screen/chapters/chapter-2/section-1/Content.vue';
import C2S2Content from './screen/chapters/chapter-2/section-2/Content.vue';
import C2S3Content from './screen/chapters/chapter-2/section-3/Content.vue';
import C2S4Content from './screen/chapters/chapter-2/section-4/Content.vue';
import C2S5Content from './screen/chapters/chapter-2/section-5/Content.vue';

import C3S1Content from './screen/chapters/chapter-3/section-1/Content.vue';
import C3S2Content from './screen/chapters/chapter-3/section-2/Content.vue';
import C3S3Content from './screen/chapters/chapter-3/section-3/Content.vue';

import C4S1Content from './screen/chapters/chapter-4/section-1/Content.vue';
import C4S2Content from './screen/chapters/chapter-4/section-2/Content.vue';
import C4S3Content from './screen/chapters/chapter-4/section-3/Content.vue';
import C4S4Content from './screen/chapters/chapter-4/section-4/Content.vue';
import C4S5Content from './screen/chapters/chapter-4/section-5/Content.vue';

import C5S1Content from './screen/chapters/chapter-5/section-1/Content.vue';
import C5S2Content from './screen/chapters/chapter-5/section-2/Content.vue';
import C5S3Content from './screen/chapters/chapter-5/section-3/Content.vue';
import C5S4Content from './screen/chapters/chapter-5/section-4/Content.vue';
import C5S5Content from './screen/chapters/chapter-5/section-5/Content.vue';
import C5S6Content from './screen/chapters/chapter-5/section-6/Content.vue';
import C5S7Content from './screen/chapters/chapter-5/section-7/Content.vue';
import C5S8Content from './screen/chapters/chapter-5/section-8/Content.vue';
import C5S9Content from './screen/chapters/chapter-5/section-9/Content.vue';
import C5S10Content from './screen/chapters/chapter-5/section-10/Content.vue';
import C5S11Content from './screen/chapters/chapter-5/section-11/Content.vue';
import C5S12Content from './screen/chapters/chapter-5/section-12/Content.vue';
import C5S13Content from './screen/chapters/chapter-5/section-13/Content.vue';
import C5S14Content from './screen/chapters/chapter-5/section-14/Content.vue';
import C5S15Content from './screen/chapters/chapter-5/section-15/Content.vue';
import C5S16Content from './screen/chapters/chapter-5/section-16/Content.vue';
import C5S17Content from './screen/chapters/chapter-5/section-17/Content.vue';
import C5S18Content from './screen/chapters/chapter-5/section-18/Content.vue';
import C5S19Content from './screen/chapters/chapter-5/section-19/Content.vue';
import C5S20Content from './screen/chapters/chapter-5/section-20/Content.vue';
import C5S21Content from './screen/chapters/chapter-5/section-21/Content.vue';
import C5S22Content from './screen/chapters/chapter-5/section-22/Content.vue';
import C5S23Content from './screen/chapters/chapter-5/section-23/Content.vue';
import C5S24Content from './screen/chapters/chapter-5/section-24/Content.vue';
import C5S25Content from './screen/chapters/chapter-5/section-25/Content.vue';
import C5S26Content from './screen/chapters/chapter-5/section-26/Content.vue';
import C5S27Content from './screen/chapters/chapter-5/section-27/Content.vue';
import C5S28Content from './screen/chapters/chapter-5/section-28/Content.vue';
import C5S29Content from './screen/chapters/chapter-5/section-29/Content.vue';

const AppNavigation = StackNavigator(
	{
		Title,
		ChapterList,
		SectionList,

		C1S1Content,
		C1S2Content,

		C2S1Content,
		C2S2Content,
		C2S3Content,
		C2S4Content,
		C2S5Content,

		C3S1Content,
		C3S2Content,
		C3S3Content,

		C4S1Content,
		C4S2Content,
		C4S3Content,
		C4S4Content,
		C4S5Content,

		C5S1Content,
		C5S2Content,
		C5S3Content,
		C5S4Content,
		C5S5Content,
		C5S6Content,
		C5S7Content,
		C5S8Content,
		C5S9Content,
		C5S10Content,
		C5S11Content,
		C5S12Content,
		C5S13Content,
		C5S14Content,
		C5S15Content,
		C5S16Content,
		C5S17Content,
		C5S18Content,
		C5S19Content,
		C5S20Content,
		C5S21Content,
		C5S22Content,
		C5S23Content,
		C5S24Content,
		C5S25Content,
		C5S26Content,
		C5S27Content,
		C5S28Content,
		C5S29Content,
	},
	{
		initialRouteName: 'Title',
		headerMode: 'none',
	}
);

export default AppNavigation;