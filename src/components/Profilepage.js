
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PictureModal from './PictureModal';
import Profileposts from './Profileposts';

function Profilepage() {
  const [usersArr, setUsersArr] = useState([]);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const params = useParams();


  useEffect(() => {
    fetch('http://localhost:3000/users/')
      .then(res => res.json())
      .then(data => setUsersArr(data));
  }, [params.id]);

  const user = usersArr.find(user => user.id === parseInt(params.id));

  if (!user) {
    return <div>Loading...</div>;
  }


  function handlePictureClick(picture) {
    setSelectedPicture(picture);
  }

  function handleCloseClick() {
    handlePictureClick(null);
  }

  function handleSubmitComment(pictureId, comment) {
    const updatedPictures = user.pictures.map(picture => {
      if (picture.id === pictureId) {
        return {
          ...picture,
          comments: [...picture.comments, { username: user.username, comment }],
        };
      } else {
        return picture;
      }
    });

    const updatedUser = { ...user, pictures: updatedPictures };

    setUsersArr(usersArr.map(u => (u.id === updatedUser.id ? updatedUser : u)));
  }

  return (
    <div className='profileBanner'>
      <div className='profile-container'>
        <img src={user.profilepicture} alt={user.name} className='profilePicture' />

        <div className='followNum' >
          <h3>{user.followers.list.length}</h3>
          <p className='followers'>Followers</p>
        </div>

        <div className='follow'>
          <h3>{user.following.list.length} </h3>
          <p className='following'>Following</p>
        </div>
      </div>

      <h2 className='userName'>{user.username}</h2>

      <p className='bio'>{user.bio}</p>

       (<Profileposts pictures={user.pictures} handlePictureClick={handlePictureClick} handleSubmitComment={handleSubmitComment} />
      
       {selectedPicture ?  (<PictureModal selectedPicture={selectedPicture} setSelectedPicture={setSelectedPicture} handlePictureClick={handlePictureClick} handleCloseClick={handleCloseClick} />) 
       : null}
    </div>
  );
}

export default Profilepage;