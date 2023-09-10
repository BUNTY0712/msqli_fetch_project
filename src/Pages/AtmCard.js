import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AtmCard = ({ Data }) => {
	const { pincode } = useSelector((state) => state.ui);
	console.log('pincode', pincode);
	const [toggle, setToggle] = useState(false);
	const [userData, setUserData] = useState([]);
	const [formData, setFormData] = useState({
		withdraw: '0',
		//r
		pin: pincode,
	});
	const handleSubmit = async () => {
		const form = new FormData();
		form.append('withdraw', formData.withdraw);
		form.append('pin', formData.pin);

		try {
			const response = await fetch('http://localhost/atm/backend/atmwd.php', {
				method: 'POST',
				body: form,
			});

			if (response.ok) {
				try {
					const responseData = await response.json();
					setUserData(responseData);
					console.log('userdata', responseData);
					console.log('Amount withdrawn successfully');
				} catch (jsonError) {
					console.error('JSON parsing error:', jsonError);
					// Handle the JSON parsing error gracefully, e.g., display an error message
				}
			} else {
				// Handle server errors or non-JSON responses
				console.error('Server error or non-JSON response');
				// You may display an error message or take appropriate action here
			}
		} catch (error) {
			console.error('An error occurred while withdrawing the amount:', error);
			// Handle network errors gracefully, e.g., display an error message
		}
	};

	useEffect(() => {
		handleSubmit();
	}, []);

	// useEffect(() => {
	//   axios
	//     .get("http://localhost/news-site/backend/atmgetdata.php")
	//     .then((response) => setUserData(response.data))
	//     .catch((error) => console.error("Error fetching data:", error));
	// }, [handleSubmit]);

	return (
		<>
			<Grid container>
				<Grid item lg={6} mx='auto'>
					<Box
						mt={5}
						style={{
							background: '	#1a84b8',
							borderRadius: '8px',
						}}>
						<Box style={{ padding: '50px' }}>
							<h2>VISA PLATINIUM</h2>
							Withdraw Amount:{' '}
							<input
								onChange={(e) =>
									setFormData({ ...formData, withdraw: e.target.value })
								}
								type='number'
								// name="wd"
								value={formData.withdraw}
							/>
							<button
								type='submit'
								onClick={() => {
									handleSubmit();
									setFormData({ ...formData, withdraw: 0 });
								}}>
								withdraw
							</button>
						</Box>
						<Box
							style={{
								backgroundColor: '#00008B',
								width: '100%',
								height: '60px',
								textAlign: 'center',
							}}>
							<h1 style={{ color: 'white' }}>4000 6822 9652 6853</h1>
						</Box>
						<Box style={{ padding: '10px' }} ml={5} mt={2}>
							<h5>EX-DATE: 23/02/40</h5>
						</Box>
						<Box
							style={{
								padding: '10px',
								display: 'flex',
								color: 'black',
								justifyContent: 'space-between',
							}}
							ml={5}
							mt={2}>
							{userData.map((item, i) => (
								<Box>
									<h5 style={{ textTransform: 'uppercase' }}>{item.name}</h5>
									<Box style={{ fontWeight: 'bold' }}>
										Account Bal -{' '}
										{item.account > 0 ? item.account : 'insufficient value'}
									</Box>
								</Box>
							))}

							<Box mr={3} style={{ fontWeight: 'bold', fontSize: '30px' }}>
								VISA
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default AtmCard;
