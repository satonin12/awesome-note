import { Box, DrawerProps, styled } from '@mui/material';

export const useNotionItemStyle = () => {
	const DrawerSCMUI = styled(Box)<DrawerProps>(() => ({
		width: '400px',
		height: '100%',

		padding: '0 200px',
		// border: '1px solid purple',

		overflowY: 'scroll',
		overflowX: 'hidden',
	}));

	return {
		DrawerSCMUI
	}
}


