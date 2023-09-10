import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AtmCard from './AtmCard';
import { Pin } from '../Reducers/UiReducer';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	//   const [pincode, setPincode] = useState();
	const [message, setMessage] = useState('');
	const [Data, setData] = useState();
	const [formData, setFormData] = useState({
		pin: '',
	});
	const handleSubmit = async (e) => {
		// e.preventDefault();
		const form = new FormData();
		form.append('pin', formData.pin);
		dispatch(Pin(formData.pin));
		// console.log('bunty', formData.pin);
		try {
			const response = await fetch(
				'http://localhost/news-site/backend/atmlogin.php',
				{
					method: 'POST',
					body: form,
				}
			);

			if (response.ok) {
				const responseData = await response.json(); // Parse the response data
				setData(responseData); // Update the Data state with the response data
				console.log('data', Data);
				console.log('ATM login successful');
			} else {
				console.error('Failed to login');
			}
		} catch (error) {
			console.error('An error occurred while logging in', error);
		}
	};
	const handleRefresh = () => {
		window.location.reload();
		// navigate("/");
	};
	console.log('atm', formData);
	console.log('atm2', Data);

	return (
		<>
			<Grid container>
				<Grid item lg={4} mx='auto'>
					<Box mt={5}>
						<h1>Enter Your ATM PIN </h1>
					</Box>
					<Box>
						<form>
							<input
								onChange={(e) =>
									setFormData({ ...formData, pin: e.target.value })
								}
								// onClick={(e) =>
								//   setFormData({ ...formData, pin: e.target.value })
								// }
								type='text'
								className='form-control'
							/>
							{message && (
								<Box style={{ fontWeight: 'bold', color: 'red' }}>
									{message}
								</Box>
							)}
							{/* <Box>{message}/</Box> */}
							<Box mt={3}>
								<button
									onClick={() => {
										handleSubmit();
										navigate('/atmcard');
									}}
									type='button'
									className='btn btn-success'>
									Submit
								</button>
								<button
									style={{ marginLeft: '15px' }}
									type='button'
									className='btn btn-danger'
									//   onClick={handleRefresh}
									onClick={() => navigate('/')}>
									Clear
								</button>
								{/* {Data} */}
							</Box>
						</form>
					</Box>
				</Grid>
			</Grid>
			{/* {Data && <AtmCard Data={Data} handleSubmit={handleSubmit} />} */}
		</>
	);
};

export default LoginPage;
