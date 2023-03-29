import React from 'react'
import "./Posts.css"
import { Avatar } from '@mui/material';


function Posts({post, addLike}) {

  const commentSection = post.comments.map(comment =>{
    return  <h4 key = {comment.comment} className="posts_text"><strong>{comment.user}</strong> {comment.comment}</h4>
  })

  function handleLike(e){
    fetch(`http://localhost:3001/posts/${post.id}`,{
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "likes": post.likes + 1
      })
    })
    .then(response => response.json())
    .then(data => addLike(data))
   
  }

  return (
    <div className = "posts">
        {/* header -> avatar + user */} 
        <div className='posts_header'>
            <Avatar
                className='posts_avatar'
                alt = "Avatar"
                src = {post.users_avi}
                />
            <h3 className ="posts_username ">{post.username}</h3>
        </div>
        {/* image */} 
        <img className="posts_img" src = {post.image}/>
        {/* username + caption */}
        <button onClick = {handleLike} className='posts_like_button'>🤍</button>
        <h4 className="posts_likes"><strong>{post.likes} likes</strong></h4>
        <h4 className="posts_text"><strong>{post.username}</strong> {post.caption}</h4>
        <div className='posts_comment_section'>
            {commentSection}
        </div>
        <form>
            <input className = "posts_comment_input" placeholder = "Add Comment..."></input>
        </form>
    </div>
  )
}

export default Posts