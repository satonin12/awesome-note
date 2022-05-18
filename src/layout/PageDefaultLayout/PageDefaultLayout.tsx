import React, {FC} from 'react'
import Header from '../../components/AnyPage/Header/Header';
import {IReactChildren} from '../../types/type';
import Footer from '../../components/AnyPage/Footer/Footer';

const PageDefaultLayout : FC<IReactChildren> = ({children}) => {
	return (
		<>
			<Header />
				{children}
			<Footer/>
		</>
	)
}

export default React.memo(PageDefaultLayout)
