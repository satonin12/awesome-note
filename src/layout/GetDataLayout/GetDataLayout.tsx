import React, {FC} from 'react'

interface IGetDataLayout {
	children: React.ReactChild | React.ReactNode
}

const GetDataLayout : FC<IGetDataLayout> = ({children}) => {

	// get data here

	return (
		<>
			{children}
		</>
	)
}

export default React.memo(GetDataLayout)
