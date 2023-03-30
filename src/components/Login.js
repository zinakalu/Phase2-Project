import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({username, onHandleUsername}) {
	const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleClickLogin(){
        navigate( '/main_feed' )
    }

    function handleClickCreateAcct(){
        navigate( '/create_account' )
    }

		function validatePassword(password){
			if(password.length >= 5 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\W/.test(password)) {
				return true
			} else {
				return false
			}
		}

		function handleClickLogin(e){
			e.preventDefault();
			if(validatePassword(password)){
				navigate('/main_feed')
			} else{
				alert('Invalid password! Password must contain one lowercase letter, one uppercase letter, one special character, and must be at least 5 characters long.')
			}
		}

		function handlePasswordChange(e){
			setPassword(e.target.value)
		}

		function handleUsername(e){
			onHandleUsername(e.target.value)
		}

  return (
    <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
                <h1 className='login__title'>SOZ-a-gram</h1>
                <h2>Login Here:</h2>
				<div className="login__field">
					<input type="text" className="login__input" placeholder="Username / Email" value = {username} onChange={handleUsername}/>
				</div>
				<div className="login__field">
					<input type="password" className="login__input" placeholder="Password" onChange={handlePasswordChange} value = {password}/>
				</div>
				<button onClick={handleClickLogin} className="button login__submit">
					<span className="button__text">Log In Now</span>
				</button>
                <div>		
                <button onClick={handleClickCreateAcct} className="button login__submit">
					<span className="button__text">Create Account</span>
				</button>	
                </div>	
			</form>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
    </div>
  )
}

export default Login