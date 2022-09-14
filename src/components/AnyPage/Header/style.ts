import { Box, DrawerProps, styled } from '@mui/material';

export const useHeaderStyle = () => {
	const DrawerSCMUI = styled(Box)<DrawerProps>(() => ({
		borderBottom: '1px solid pink',

		padding: '8px',
	}));

	return {
		DrawerSCMUI
	}
}


