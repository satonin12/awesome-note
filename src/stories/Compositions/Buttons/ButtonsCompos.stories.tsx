import React from 'react';

import ButtonsCompos from './ButtonsCompos';
import { ComponentMeta, Story } from '@storybook/react';
import ButtonUI from '../../../UI/Button/ButtonUI';

export default {
	title: 'Compositions/Buttons',
	component: ButtonsCompos,
	subcomponents: { ButtonUI },
	parameters: {
		docs: {
			page: null,
			description: {
				component: 'Compositions all variants buttons',
			},
		},
	},
} as ComponentMeta<typeof ButtonsCompos>

const Template : Story<any> = () => <ButtonsCompos />;

export const Default = Template.bind({});

Default.parameters = {
	docs: {
		description: {
			story: 'Compositions all variants buttons',
		},
	},
};
