import React from 'react'
import { useNavigate } from 'react-router-dom'

function MainFeed() {

    const navigate = useNavigate()

    function handleClickLogOut(){
        navigate( '/' )
    }

  return (
    <div class='main__feed'>Main Feed

		<button onClick={handleClickLogOut} class="button__logout">
			<span class="logoutButton__text">Log Out</span>
		</button>

    </div>

  )
}

export default MainFeed