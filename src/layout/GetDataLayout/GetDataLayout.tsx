import React, {FC} from 'react'
import {IReactChildren} from '../../types/type';

const GetDataLayout : FC<IReactChildren> = ({children}) => {

	// get data here

	return (
		<>
			{children}
		</>
	)
}

export default React.memo(GetDataLayout)
