import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons';
import Posts from './Posts';


function Profilepage() {
  const [usersArr, setUsersArr] = useState([])
  const [profilePosts, setProfile] = useState([])
  const params = useParams()
  
  useEffect(()=>{
    fetch("http://localhost:3001/users/")
    .then(res => res.json())
    .then(data => setUsersArr(data))
  }, [params.id])

  useEffect(()=>{
    fetch("http://localhost:3001/posts")
    .then(res => res.json())
    .then(data => setProfile(data))
  },[])
  
  const user = usersArr.find(user => user.id === parseInt(params.id))

  
  if(!user){
    return <div>Loading...</div>
  }


  const filteredProfilePost = profilePosts.filter(post => post.username === user.username)


  function onAddLike(updatedPost){
    const updatedPosts = profilePosts.map(post =>{
      if(post.id === updatedPost.id){
        return updatedPost
      }
      else {
        return post
      }
    })

    setProfile(updatedPosts)
  }
  
  const profilePostsList = filteredProfilePost.map(post => {
    return <Posts addComment={onAddLike} addLike = {onAddLike} key ={post.id} post={post}/>
  })

  return (
    <div className="profileBanner" >
      <div className='profile-container'>
          <img src={user.profilepicture} alt={user.name} className="profilePicture" />

           <div className="followNum">
              <h3>{user.followers.list.length} </h3>
              <p className="followers" >Followers</p>
           </div>
           <div className="follow" >
              <h3>{user.following.list.length} </h3>
              <p className="following" >Following</p>
           </div>
      </div>

        <h2 className="userName" >{user.username}</h2>
            <p className="bio">{user.bio}</p>
        {/*Profile Posts*/}
        {profilePostsList}
    </div>
  )
}

export default Profilepage