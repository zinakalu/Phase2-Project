import React, { useState } from 'react'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileComments from './ProfileComments';

function PictureModal({ selectedPicture, handleCloseClick, handleSubmitComment }) {
  const [showCommentInput, setShowCommentInput] = useState(false);

  function handleClick() {
    handleCloseClick();
  }



 function handlePictureClick() {
    setShowCommentInput(true);
  }


  return (
    <div className="pictureModal">
      <div className="modalContent">
        <img src={selectedPicture.imageurl} alt={selectedPicture.id} />
        <p>{selectedPicture.description}</p>

         {selectedPicture.comments && selectedPicture.comments.map(comment => (
          <p key={comment.username}>
            <strong>{comment.username}</strong> {comment.comment}<br />
          </p>
        ))} 
  
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {showCommentInput && <ProfileComments handleSubmitComment={handleSubmitComment} />}
          <button onClick={() => setShowCommentInput(true)} type="submit" >Post</button>
        </div>
  
  
        <button onClick={handleClick} className="xBtn">x</button>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  )
  
  
}

export default PictureModal;





