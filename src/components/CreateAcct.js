import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateAcct() {
	const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleClickCreateAcct(){
        navigate( '/main_feed' )
    }

    // function handleClickLogin(){
    //     navigate( '/' )
    // }

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


  return (
    <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="createAcct">
                <h1 className='login__title'>SOZ-a-gram</h1>
                <h2>Sign Up:</h2>
                <div className="createAcct__field">
					<input type="text" className="createAcct__input" placeholder="Mobile Number or Email"/>
				</div>
                <div class="createAcct__field">
					<input type="text" className="createAcct__input" placeholder="Full Name"/>
				</div>
				<div class="createAcct__field">
					<input type="text" className="createAcct__input" placeholder="Username"/>
				</div>
				<div class="createAcct__field">
					<input type="password" className="createAcct__input" placeholder="Password" onChange={handlePasswordChange}/>
				</div>
				<button onClick={handleClickCreateAcct} className="button login__submit">
					<span className="button__text">Create Account</span>
				</button>
                <div>		
                <button onClick={handleClickLogin} className="button login__submit">
					<span className="button2__text">Have an account? Log in</span>
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

export default CreateAcct