import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    function handleClickLogin(){
        navigate( '/main_feed' )
    }

    function handleClickCreateAcct(){
        navigate( '/create_account' )
    }

  return (
    <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
                <h1 class='login__title'>SOZ-a-gram</h1>
                <h2>Login Here:</h2>
				<div class="login__field">
					<input type="text" class="login__input" placeholder="Username / Email"/>
				</div>
				<div class="login__field">
					<input type="password" class="login__input" placeholder="Password"/>
				</div>
				<button onClick={handleClickLogin} class="button login__submit">
					<span class="button__text">Log In Now</span>
				</button>
                <div>		
                <button onClick={handleClickCreateAcct} class="button login__submit">
					<span class="button__text">Create Account</span>
				</button>	
                </div>	
			</form>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
    </div>
  )
}

export default Login