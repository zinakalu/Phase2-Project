import React from 'react'
import { useNavigate } from 'react-router-dom'

function CameraPage() {

  const navigate = useNavigate()

  function handleCameraPageBtn(){
    navigate("/main_feed")
  }

  return (
   

<form>
  <input type="text" placeholder="Enter Image URL" className="urlInput" />
  <button onClick={handleCameraPageBtn} >Post to MainFeed</button>
</form>

  )
}

export default CameraPage