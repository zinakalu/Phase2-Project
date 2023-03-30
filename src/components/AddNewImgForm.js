import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function AddNewImgForm({addNewImg}) {


  const navigate = useNavigate()


  function postToMainFeedBtn(){
    navigate("/main_feed")
  }


  const [inputURL, setInputURL] = useState("")
  const [inputCaption, setInputCaption] = useState ("")

  const handleChangeURL = (e) => setInputURL(e.target.value)
  const handleChangeCaption = (e) => setInputCaption(e.target.value)

  function handleSubmit(e) {
    e.preventDefault()

    const newImg = {
      image: inputURL,
      "username": "PLACEHOLDER",
      "users_avi": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjsW6R85NXGAEbGN_2m2roKoF0BeyHFojFQ&usqp=CAU",
      "caption": inputCaption,
      "comments": [
      ]
    }
    e.target.reset()
    addNewImg(newImg)
    console.log(newImg)
  }
  return (
  <form onSubmit={handleSubmit}>
    <div>
      <input type="text" onChange={handleChangeURL} placeholder="Enter Image URL" className="urlInput" />
    </div>
    <div>
      <input type="text" onChange={handleChangeCaption} placeholder="Enter Caption" className="captionInput" />
    </div>
    <button onClick={postToMainFeedBtn} >Post to Main Feed</button>
  </form>
  )
}
export default AddNewImgForm