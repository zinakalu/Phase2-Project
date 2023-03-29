import React from 'react'
import { useNavigate } from 'react-router-dom'
import { faCamera} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainFeed() {

    const navigate = useNavigate()

    function handleClickLogOut(){
        navigate( '/' )
    }

    function handleCameraClick(){
      navigate('/add-pictures')
    }

  

  return (
    <div class='main__feed'>Main Feed

    <FontAwesomeIcon icon={faCamera} onClick={handleCameraClick} className="cameraIcon" />
		<button onClick={handleClickLogOut} class="button__logout">
			<span class="logoutButton__text">Log Out</span>
		</button>
    

    </div>

  )
}

export default MainFeed