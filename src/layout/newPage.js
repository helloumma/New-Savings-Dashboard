import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/Home/NavTW'
import useDarkMode from 'use-dark-mode'

const propTypes = {
	children: PropTypes.node,
}

const NewPage = ({ children, route }) => {
	const { value } = useDarkMode(true)
	return (
		<>
			<div class="flex h-screen w-full">
				<div class="bg-red-500 p-5">
					<Nav route={route} />
				</div>
				<div
					class={
						value
							? 'bg-red-100 w-full p-5'
							: 'bg-gray-900 w-full p-5'
					}
				>
					<div class="flex flex-col">{children}</div>
				</div>
			</div>
		</>
	)
}

NewPage.propTypes = propTypes

export default NewPage
/*
	<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
							<h2 class="text-orange-700 text-lg mb-5">
								Budgets
							</h2>
						</div>
						<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
							<h2 class="text-orange-700 text-lg mb-5">
								Categories
							</h2>
						</div>
					</div>
					<div class="flex">
						<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
							<h2 class="text-orange-700 text-lg mb-5">Graph</h2>
						</div>
						<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
							<h2 class="text-orange-700 text-lg mb-5">Table</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full bg-orange-200 text-orange-800 p-5">
				<h2 class="text-orange-700 text-lg mb-5">update</h2>
			</div> */
