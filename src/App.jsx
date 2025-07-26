// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Add_data } from "./pages/form";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add" element={<Add_data />} />
				</Routes>
			</BrowserRouter>

			{/* <p className="w-full">Halo dunia</p> */}
		</>
	);
}

export default App;
