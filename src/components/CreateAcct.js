import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateAcct() {
	const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleClickCreateAcct(){
			if(validatePassword(password)){
				navigate( '/main_feed' );
			} else{
				alert("Invalid password! Password must contain at least one digit, one lowercase letter, one uppercase letter, and is at least 5 characters long.")
			}
	}
  

    // function handleClickLogin(){
    //     navigate( '/' )
    // }


		function validatePassword(password){
			if(password.length >= 5 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)){
				return true
			} else
			return false
		}

    function handleClickLogin(e){
			e.preventDefault();
        if(validatePassword(password)){
					navigate( '/main_feed' );
				} else{
					alert("Invalid password! Password must contain at least one digit, one lowercase letter, one uppercase letter, and is at least 5 characters long.")
				}
    }

				function handlePasswordChange(e){
					setPassword(e.target.value)
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
					<input type="password" class="createAcct__input" placeholder="Password" onChange={handlePasswordChange}/>
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