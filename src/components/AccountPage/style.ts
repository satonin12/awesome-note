import { Box, DrawerProps, styled } from '@mui/material';

export const useAccountPageStyle = () => {
	const DrawerSCMUI = styled(Box)<DrawerProps>(() => ({

		// display: 'flex',

		width: '100%',
		height: '97%',

	}));

	const NotionContainerSCMUI = styled(Box)<DrawerProps>(() => ({
		width: '100%',
		height: '100%',

		overflowY: 'hidden',

		// border: '1px solid cyan',
	}));

	return {
		DrawerSCMUI,
		NotionContainerSCMUI
	}
}


