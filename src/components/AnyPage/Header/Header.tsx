import React, {FC} from 'react'

import {useHeaderStyle} from './style';

const Header : FC = () => {
	return (
		<DrawerSCMUI>Header</DrawerSCMUI>
	)
}

const {
	DrawerSCMUI
} = useHeaderStyle();

export default React.memo(Header)
