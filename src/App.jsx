import { useState } from 'react'
import Navbar from "/src/components/Navbar.jsx"
import LoginContainer from './routes/LoginContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

	return (
    	<BrowserRouter>
      		<Navbar />
			<Routes>
				<Route path="/" element={<LoginContainer />} />
			</Routes>
    	</BrowserRouter>
  	)
}

export default App
