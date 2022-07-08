import React, { FC } from 'react';

import { ButtonProps, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

import {theme} from './theme';
import { ButtonSCMUI } from './style';

interface IButtonUIProps extends ButtonProps {}

const ButtonUI: FC<IButtonUIProps> = ({ variant, disabled, children, ...props }) => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<ButtonSCMUI variant={variant} disabled={disabled} {...props}>
					{children}
				</ButtonSCMUI>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default React.memo(ButtonUI);
