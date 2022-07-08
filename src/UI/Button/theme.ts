import { PaletteColor } from '@mui/material/styles';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface Theme {
		palette: {
			fqLavanda: PaletteColor
			fqPink: PaletteColor
			fqWhite: PaletteColor
		};
	}

	interface Palette {
		fqLavanda: Palette['primary'];
		fqPink: Palette['primary'];
		fqWhite: Palette['primary'];
	}

	interface PaletteOptions {
		fqLavanda: PaletteOptions['primary'];
		fqPink: PaletteOptions['primary'];
		fqWhite: PaletteOptions['primary'];
	}

	interface PaletteColorOptions {
		light?: string;
		main?: string;
		dark?: string;
		hover?: string;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		white: true;
		outlined: true;
	}
}

export const theme = createTheme({
	palette: {
		fqLavanda: {
			light: '#E1CBFF',
			main: '#D2B3FF',
			dark: '#B98AFF',
		},
		fqPink: {
			light: '#F3D5FF',
			main: '#ab47bc',
			dark: '#f3e5f5',
		},
		fqWhite: {
			light: '#FCF8FC',
			main: '#F3E5F5',
			dark: '#E9DCEA',
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'contained',
			},
			styleOverrides: {
				root: {
					'&:disabled': {
						borderColor: 'transparent',
					},
				},
			},
			variants: [
				{
					props: { variant: 'text' },
					style: (theme: any) => {
						return {
							color: theme.theme.palette.secondary.main,
						};
					},
				},
				{
					props: { variant: 'contained' },
					style: (theme: any) => {
						const baseStyles = {
							color: theme.theme.palette.common.black,
							backgroundColor: theme.theme.palette.fqLavanda.light,
							border: `2px solid ${theme.theme.palette.fqLavanda.light}`,
							boxShadow: 'none',

							'&:hover': {
								backgroundColor: theme.theme.palette.fqLavanda.light,
								borderColor: theme.theme.palette.fqLavanda.dark,
								boxShadow: 'none',
							},
							'&:active': {
								backgroundColor: theme.theme.palette.fqLavanda.main,
								boxShadow: 'none',
							},
							'&:focus': {},
						}

						// !if statements
						return (theme.ownerState.color !== 'primary') ? {
							...baseStyles,
							// color: theme.theme.palette[theme.ownerState.color],

							// state with color props || first color in palette || default = dark
							color: theme.theme.palette[theme.ownerState.color]?.main || theme.theme.palette[theme.ownerState.color] || theme.theme.palette.common.dark,

							borderColor: theme.theme.palette[theme.ownerState.color],
						} : {
							...baseStyles,
						};
					},
				},
				{
					props: { variant: 'outlined' },
					style: (theme: any) => {
						const baseStyles = {
							color: theme.theme.palette.secondary.main,
							backgroundColor: theme.theme.palette.common.white,
							borderColor: theme.theme.palette.secondary.light,
							boxShadow: 'none',

							'&:disabled': {
								borderColor: theme.theme.palette.grey[300],
							},

							'&:hover': {
								backgroundColor: theme.theme.palette.fqPink.light,
								borderColor: theme.theme.palette.fqPink.main,
								boxShadow: 'none',
							},
							'&:active': {
								boxShadow: 'none',
								backgroundColor: theme.theme.palette.fqPink.dark,
							},
							'&:focus': {},
						};

						// !if statements
						return (theme.ownerState.color !== 'primary') ? {
							...baseStyles,
							color: theme.theme.palette[theme.ownerState.color],
							borderColor: theme.theme.palette[theme.ownerState.color],
						} : {
							...baseStyles,
						};
					},
				},
				{
					props: { variant: 'white' },
					style: (theme: any) => {
						const baseStyles = {
							color: theme.theme.palette.secondary.main,
							backgroundColor: theme.theme.palette.fqWhite.light,
							borderColor: theme.theme.palette.fqWhite.light,
							boxShadow: 'none',

							'&:hover': {
								backgroundColor: theme.theme.palette.fqWhite.main,
								boxShadow: 'none',
							},
							'&:active': {
								boxShadow: 'none',
								backgroundColor: theme.theme.palette.fqWhite.dark,
							},
							'&:focus': {},
						}

						// !if statements
						return (theme.ownerState.color !== 'primary') ? {
							...baseStyles,
							// state with color props || first color in palette || default = dark
							color: theme.theme.palette[theme.ownerState.color]?.main || theme.theme.palette[theme.ownerState.color] || theme.theme.palette.common.dark,
							// backgroundColor: theme.theme.palette[theme.ownerState.color],
						} : {
							...baseStyles,
						};
					},
				},
			],
		},
	},
});
