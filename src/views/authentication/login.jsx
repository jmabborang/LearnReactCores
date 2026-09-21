import { useState } from 'react';
import Button from '../../components/Button';
import FormGroup from '../../components/FormGroup';
import './css/login.css';

function Login() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const isDisabled = !userName.trim() || !password.trim();

	const handleSubmit = (event) => {
		event.preventDefault();

		const credentials = {
			username: userName.trim(),
			password: password.trim(),
		};

		if (!credentials.username || !credentials.password) {
			return;
		}

		console.log(credentials);
	};

	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<div className="login-header">
					<h1>Inventory Management System</h1>
					<p>Welcome back. Please enter your details.</p>
				</div>
				<FormGroup
					autoComplete="username"
					id="username"
					label="Username"
					placeholder="Enter your username"
					required
					type="text"
					value={userName}
					onChange={(event) => setUserName(event.target.value)}
				/>
				<FormGroup
					autoComplete="current-password"
					id="password"
					label="Password"
					placeholder="Enter your password"
					required
					type="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<Button disabled={isDisabled} type="submit">
					Login
				</Button>
			</form>
		</div>
	);
}

export default Login;
