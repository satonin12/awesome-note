import React, { FC } from 'react';

import NotionLists from '../Notion/NotionLists/NotionLists';

import {useAccountPageStyle} from './style';

const AccountPage: FC = () => {
	return (
		<DrawerSCMUI>
			<NotionContainerSCMUI>
				<NotionLists />
			</NotionContainerSCMUI>
		</DrawerSCMUI>
	);
};

const {
	DrawerSCMUI,
	NotionContainerSCMUI
} = useAccountPageStyle();

export default React.memo(AccountPage);
