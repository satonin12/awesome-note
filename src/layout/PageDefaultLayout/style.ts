import { Box, DrawerProps, styled } from '@mui/material';

export const usePageDefaultLayoutStyle = () => {
	const DrawerSCMUI = styled(Box)<DrawerProps>(() => ({
		width: '100%',
		height: '100vh',
	}));

	return {
		DrawerSCMUI
	}
}


