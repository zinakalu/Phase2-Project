import React, { useState } from 'react'
import { faHeart, faComment, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileComments from './ProfileComments';

function Profileposts({ pictures, handlePictureClick, handleSubmitComment, selectedPicture }) {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [pics, setPics] = useState(pictures);


  function handlePictureClick() {
    setShowCommentInput(true);
  }

  function handleLikeClick(picture) {
    const updatedPictures = pictures.map(p => {
      if (p.id === picture.id) {
        return {
          ...p,
          likes: p.likes + 1,
          likedByUser: true 
        };
      } else {
        return p;
      }
    });
    setPics(updatedPictures);
  }

  return (
    <div className="profilePostsGrid">
      {pictures.map(picture => (
        <div key={picture.id} className="profilePosts" onClick={() => handlePictureClick(picture)}>
          <img src={picture.imageurl} alt={picture.id} />
          <p>{picture.description}</p>
          <FontAwesomeIcon icon={faHeart} className={picture.likedByUser ? "fa-heart-red" : "fa-heart"} onClick={(e) => {
            e.stopPropagation();
            handleLikeClick(picture);
          }} />
          <FontAwesomeIcon icon={faComment} className="fa-comment" onClick={(e) => e.stopPropagation()} />
          <FontAwesomeIcon icon={faBookmark} className="fa-bookmark"/>
          <p className="likes"> {picture.likes} Likes</p>
        </div>
      ))}

      {selectedPicture && selectedPicture.comments && selectedPicture.comments.map(comment => (
        <p key={comment.username}>
          <strong>{comment.username}</strong> {comment.comment}<br />
        </p>
      ))}

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {showCommentInput && <ProfileComments handleSubmitComment={handleSubmitComment} />}
        <button onClick={() => setShowCommentInput(true)} type="submit" >Post</button>
      </div>
    </div>
  )
}

export default Profileposts;


