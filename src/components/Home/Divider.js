import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	children: PropTypes.node,
}

const Divider = ({ children }) => {
	return (
		<div class="z-10 shadow w-full pl-0 text-4xl font-bold">{children}</div>
	)
}

Divider.propTypes = propTypes

export default Divider
