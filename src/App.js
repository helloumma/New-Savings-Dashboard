import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
	const [buttonText, setButtonText] = useState('Click me, please')
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<button onClick={() => setButtonText('Thanks, been clicked!')}>
					{buttonText}
				</button>
			</header>
		</div>
	)
}

export default App
