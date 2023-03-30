import React from 'react'
import AddNewImgForm from './AddNewImgForm'

function NewImgPage({posts, setPosts, username}) {

    function addNewImg(newImg){
        fetch("http://localhost:3001/posts",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newImg)
        })
        .then(res => res.json())
        .then(newImgData => setPosts([newImgData,...posts]))
  
      }

  return (
    <div>
      <p class="addImg">Add New Images Here</p>

        <AddNewImgForm username = {username} addNewImg={addNewImg}/>

    </div>
  )
}

export default NewImgPage