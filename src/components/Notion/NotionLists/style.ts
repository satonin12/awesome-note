import { Box, DrawerProps, styled } from '@mui/material';

export const useNotionListStyle = () => {
	const DrawerSCMUI = styled(Box)<DrawerProps>(() => ({
		display: 'flex',
		flexDirection: 'row',

		height: '100%',

		overflowX: 'scroll',

	}));

	return {
		DrawerSCMUI
	}
}


