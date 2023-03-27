import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateAcct() {

    const navigate = useNavigate()

    function handleClickCreateAcct(){
        navigate( '/main_feed' )
    }

    function handleClickLogin(){
        navigate( '/' )
    }

  return (
    <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="createAcct">
                <h1 class='login__title'>SOZ-a-gram</h1>
                <h2>Sign Up:</h2>
                <div class="createAcct__field">
					<input type="text" class="createAcct__input" placeholder="Mobile Number or Email"/>
				</div>
                <div class="createAcct__field">
					<input type="text" class="createAcct__input" placeholder="Full Name"/>
				</div>
				<div class="createAcct__field">
					<input type="text" class="createAcct__input" placeholder="Username"/>
				</div>
				<div class="createAcct__field">
					<input type="password" class="createAcct__input" placeholder="Password"/>
				</div>
				<button onClick={handleClickCreateAcct} class="button login__submit">
					<span class="button__text">Create Account</span>
				</button>
                <div>		
                <button onClick={handleClickLogin} class="button login__submit">
					<span class="button2__text">Have an account? Log in</span>
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

export default CreateAcct