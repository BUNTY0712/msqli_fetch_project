import React from 'react';
import AddUsers from './Pages/AddUsers';
import AllUsers from './Pages/AllUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AtmCard from './Pages/AtmCard';
import LoginPage from './Pages/LoginPage';
import Start from './Pages/Start';

const MainRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Start />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/atmcard' element={<AtmCard />} />
					{/* <Route path="/" element={<AllUsers />} /> */}
					{/* <Route path="/adduser" element={<AddUsers />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default MainRouter;
