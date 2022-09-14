import React, {FC} from 'react';
import NotionItem from '../NotionItem/NotionItem';

import {useNotionListStyle} from './style';

import {data, short_data} from './data.json';

const notionArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const NotionLists : FC = () => {

	console.log(data)

	return (
		<DrawerSCMUI>
			<NotionItem data={short_data} />
			{notionArray.map(() => (
				<NotionItem data={data} />
			))}
		</DrawerSCMUI>
	)
}

const {
	DrawerSCMUI
} = useNotionListStyle();

export default NotionLists;
