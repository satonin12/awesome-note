import { Drawer, DrawerProps, styled } from '@mui/material';

export const useLeftDraweerStyle = () => {
	const DrawerSCMUI = styled(Drawer)<DrawerProps>(() => ({
		// width: '30%',
		// border: '1px solid red',
	}));

	return {
		DrawerSCMUI
	}
}


