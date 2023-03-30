import React from 'react'
import AddNewImgForm from './AddNewImgForm'

function NewImgPage({posts, setPosts}) {

    function addNewImg(newImg){
        fetch("http://localhost:3001/posts",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newImg)
        })
        .then(res => res.json())
        .then(newImgData => setPosts([...posts, newImgData]))
      }

  return (
    <div>NewImgPage

        <AddNewImgForm addNewImg={addNewImg}/>

    </div>
  )
}

export default NewImgPage