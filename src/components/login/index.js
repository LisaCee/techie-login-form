import './styles.scss'

export default function Login() {
	return (
		<div className="login">
			<h1>Sign in</h1>
			<form action="">
				<label className='sr-only' htmlFor="username">Username</label>
				<input id="username" type="text" placeholder="Username"/>
				<label className='sr-only' htmlFor="password">Password</label>
				<input id="password" type="password" placeholder="Password"/>
				<div className="links">
					<a className="password-link" href="https://www.lisacanini.com">Forgot Password?</a>
					<a className="signup-link" href="https://www.lisacanini.com">Signup</a>
				</div>
				<button>Login</button>
			</form>
		</div>
	)

}
