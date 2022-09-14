import React, {FC} from 'react'
import Header from '../../components/AnyPage/Header/Header';
import {IReactChildren} from '../../types/type';

import {usePageDefaultLayoutStyle} from'./style';

const PageDefaultLayout : FC<IReactChildren> = ({children}) => {
	return (
		// TODO: delete div, add semantic tag
		<DrawerSCMUI>
			<Header />
				{children}
			{/*<Footer/>*/}
		</DrawerSCMUI>
	)
}

const {
	DrawerSCMUI
} = usePageDefaultLayoutStyle();

export default React.memo(PageDefaultLayout)
