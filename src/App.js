import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";
import { current } from "./JS/Actions/user";
import { useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.getItem("token")) {
			dispatch(current());
		}
	}, [dispatch]);

	return (
		<div className='App'>
			<NavBar />
			<h1>Authentification</h1>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/*' element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
