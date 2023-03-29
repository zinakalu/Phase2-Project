import React, { useState } from 'react'


function ProfileComments({handleSubmitComment}) {
  const [commentText, setCommentText] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: commentText })
    })
    .then(response => response.json())
    .then(data => {
      handleSubmitComment(data.comment);
      setCommentText('');
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={commentText} onChange={(e)=> setCommentText(e.target.value)}
        placeholder="Add a comment" className="commentInput" />
    </form>
  )
}

export default ProfileComments