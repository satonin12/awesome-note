import React, {FC} from 'react'
import Header from '../../components/AnyPage/Header/Header';
import {IReactChildren} from '../../types/type';
import Footer from '../../components/AnyPage/Footer/Footer';

const PageDefaultLayout : FC<IReactChildren> = ({children}) => {
	return (
		// TODO: delete div, add semantic tag
		<div style={{
			padding: '40px'
		}}>
			<Header />
				{children}
			<Footer/>
		</div>
	)
}

export default React.memo(PageDefaultLayout)
