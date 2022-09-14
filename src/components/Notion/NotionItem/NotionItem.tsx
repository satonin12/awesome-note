import React, {FC} from 'react';

import {useNotionItemStyle} from './style';

const NotionItem : FC = ({data}) => {
	return (
		<DrawerSCMUI>
			{data}
		</DrawerSCMUI>
	)
}

const {
	DrawerSCMUI
} = useNotionItemStyle();

export default NotionItem;
