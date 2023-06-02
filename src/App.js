import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import Navbar from "./Components/Navbar";
import Layouts from "./Components/Layouts";
import LearnerRegisteration from "./Components/LearnerRegisteration";
import TeacherRegisteration from "./Components/TeacherRegisteration";


import './Components/index.css';

import Login from "./Components/Login";

export default function App() {

	return (
		<BrowserRouter>
		<Routes>
<Route path="/" element={<Layouts />}/> 

<Route index element={<Login/>}/>
<Route path= "/learnerregisteration" element={<LearnerRegisteration/>}/> 
<Route path= "/teacherregisteration" element={<TeacherRegisteration/>}/> 


		</Routes>
		</BrowserRouter>
		
	
		
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);