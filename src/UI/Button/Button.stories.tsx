import React from 'react';

import { ButtonProps } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';

import ButtonUI from './ButtonUI';

export default {
	title: 'UI/Button',
	component: ButtonUI,
	// parameters: { docs: { source: { type: 'code' } } }
} as ComponentMeta<typeof ButtonUI>;

const Template : Story<ButtonProps> = (args) => <ButtonUI {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: 'Press me',
	variant: 'outlined',
	color: 'success'
}
