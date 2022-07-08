import React, {FC} from 'react';
import { Box } from '@mui/material';

import ButtonUI from '../../../UI/Button/ButtonUI';

const ButtonsCompos: FC = () => {
	return (
		<Box>
			<Box sx={{
				display: 'flex',

				'& > *': {
					marginRight: '10px'
				}
			}}>

				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					'& > *': {
						marginBottom: '5px'
					}
				}}>
					<ButtonUI variant='contained'>contained</ButtonUI>
					<ButtonUI variant='contained' disabled>Contained disabled</ButtonUI>
					<ButtonUI variant='contained' color="success">contained (with color (success))</ButtonUI>
					<ButtonUI variant='contained' color="inherit">contained (with color (inherit))</ButtonUI>
					<ButtonUI variant='contained' color="primary">contained (with color (primary))</ButtonUI>
					<ButtonUI variant='contained' color="secondary">contained (with color (secondary))</ButtonUI>
					<ButtonUI variant='contained' color="error">contained (with color (error))</ButtonUI>
					<ButtonUI variant='contained' color="info">contained (with color (info))</ButtonUI>
					<ButtonUI variant='contained' color="warning">contained (with color (warning))</ButtonUI>
				</Box>

				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					'& > *': {
						marginBottom: '5px'
					}
				}}>
					<ButtonUI variant='outlined'>Outlined</ButtonUI>
					<ButtonUI variant='outlined' disabled>outlined disabled</ButtonUI>
					<ButtonUI variant='outlined' color="success">Outlined (with color (success))</ButtonUI>
					<ButtonUI variant='outlined' color="inherit">Outlined (with color (inherit))</ButtonUI>
					<ButtonUI variant='outlined' color="primary">Outlined (with color (primary))</ButtonUI>
					<ButtonUI variant='outlined' color="secondary">Outlined (with color (secondary))</ButtonUI>
					<ButtonUI variant='outlined' color="error">Outlined (with color (error))</ButtonUI>
					<ButtonUI variant='outlined' color="info">Outlined (with color (info))</ButtonUI>
					<ButtonUI variant='outlined' color="warning">Outlined (with color (warning))</ButtonUI>
				</Box>

				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					'& > *': {
						marginBottom: '10px'
					}
				}}>
					<ButtonUI variant='white'>White</ButtonUI>
					<ButtonUI variant='white' disabled>White disabled</ButtonUI>
					<ButtonUI variant='white'>white</ButtonUI>
					<ButtonUI variant='white' color="success">white (with color (success))</ButtonUI>
					<ButtonUI variant='white' color="inherit">white (with color (inherit))</ButtonUI>
					<ButtonUI variant='white' color="primary">white (with color (primary))</ButtonUI>
					<ButtonUI variant='white' color="secondary">white (with color (secondary))</ButtonUI>
					<ButtonUI variant='white' color="error">white (with color (error))</ButtonUI>
					<ButtonUI variant='white' color="info">white (with color (info))</ButtonUI>
					<ButtonUI variant='white' color="warning">white (with color (warning))</ButtonUI>
				</Box>

			</Box>
		</Box>
	)
}

export default ButtonsCompos;
