import React from 'react'
import './Content.sass'

const Content = ({ children }) => {
	return (
		<div className="content">
			{children}
		</div>
	)
}

export default Content
