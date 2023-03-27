import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { faHeart, faComment, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profilepage() {
  const [usersArr, setUsersArr] = useState([])
  const params = useParams()
  console.log(params)

useEffect(()=>{
fetch("http://localhost:3000/users/")
.then(res => res.json())
.then(data => setUsersArr(data))
  }, [params.id])


  const user = usersArr.find(user => user.id === parseInt(params.id))
  console.log(usersArr)

  if(!user){
    return <div>Loading...</div>
  }


  return (
    <div className="profileBanner" >
<div className='profile-container'>
<img src={user.profilepicture} alt={user.name} className="profilePicture" />

<div className="followNum">
<h3>{user.followers.list.length} </h3>
<p className="followers" >Followers</p>
{/* <h3>{user.following.list.length} </h3> */}
</div>
<div className="follow" >
     {/* <p className="followers" >Followers</p> */}
     <h3>{user.following.list.length} </h3>
     <p className="following" >Following</p>
     
</div>
</div>

<h2 className="userName" >{user.username}</h2>

     <p className="bio">{user.bio}</p>

        <div className="profilePostsGrid" >
          {user.pictures.map(picture => (
            <div key={picture.id} className="profilePosts" >
              <img src={picture.imageurl} alt={picture.id} />
          <p>{picture.description}</p>
          <FontAwesomeIcon icon={faHeart} className="fa-heart" /> <FontAwesomeIcon icon={faComment} className="fa-comment"/>
          <FontAwesomeIcon icon={faBookmark} className="fa-bookmark" />
          <p className="likes"> {picture.likes} Likes</p>
          <p>
            {picture.comments.map(comment => <p key={comment.username} >
              {comment.username}: {comment.comment}
            </p> )}
          </p>
              </div>
              ))}


        </div>

    </div>
  )
}

export default Profilepage

// key={picture.id}