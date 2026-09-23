import { useState } from 'react';
import Button from '../../components/Button';
import FormGroup from '../../components/FormGroup';
import './css/login.css';
import ClientLogo from '../../assets/Logo/inventory-management-system-logo.png';

function Login() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const isDisabled = !userName.trim() || !password;

	const handleSubmit = (event) => {
		event.preventDefault();

		const credentials = {
			username: userName.trim(),
			password,
		};

		if (!credentials.username || !credentials.password) {
			return;
		}

		// Replace this with the authentication request when the API is connected.
		console.info('Login submitted for:', credentials.username);
	};

	return (
		<div className="login-container">
			<section className="login-brand-panel" aria-label="Inventory Management System">
				<div className="brand-mark">
					<img src={ClientLogo} alt="Inventory Management System logo" />
				</div>
				<div className="brand-copy">
					<h1>Everything in stock, always in control.</h1>
					<p>Manage products, monitor stock levels, and keep your operations moving with confidence.</p>
				</div>
			</section>
			<form className="login-form" onSubmit={handleSubmit}>
				<div className="login-header">
					<span className="form-eyebrow">WELCOME BACK</span>
					<h2>Sign in to your account</h2>
					<p>Enter your details to continue to your dashboard.</p>
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
					Sign in
				</Button>
				<p className="login-footer">Secure access for authorized team members only.</p>
			</form>
		</div>
	);
}

export default Login;
