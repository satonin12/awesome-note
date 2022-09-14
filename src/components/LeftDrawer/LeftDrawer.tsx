import { Box } from '@mui/material';
import React, {FC} from 'react';

import {useLeftDraweerStyle} from './style';

const LeftDrawer : FC = () => {
	return (
		<DrawerSCMUI
			anchor="left"
			variant="permanent"
		>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column'
			}}>
				LeftDrawer
				LeftDrawer
				LeftDrawer
			</Box>
		</DrawerSCMUI>
	)
}

const {
	DrawerSCMUI
} = useLeftDraweerStyle();

export default React.memo(LeftDrawer);
