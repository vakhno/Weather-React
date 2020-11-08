import React, { useContext } from 'react'
import Context from '../../Context'
import './Error.sass'

const Erorr = () => {
	const { error } = useContext(Context)

	return (
		<div className="error">
			{error}
		</div>
	)

}

export default Erorr
