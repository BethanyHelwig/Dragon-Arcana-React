import { useState } from 'react'
import Navbar from "/src/components/Navbar.jsx"
import LoginContainer from './components/LoginContainer.jsx'
import '/src/css/App.css'

function App() {

	return (
    	<>
      		<Navbar />
			<main>
				<LoginContainer />
			</main>
    	</>
  	)
}

export default App
