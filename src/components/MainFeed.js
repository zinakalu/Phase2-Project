import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Posts from './Posts'
import UsersContainer from './UsersContainer'
import UserSearch from './UserSearch'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NewImgPage from './NewImgPage'

function MainFeed() {

  const navigate = useNavigate()
  
  function handleClickLogOut(){
    navigate( '/' )
  }

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [usersArr, setUsersArr]= useState([])



  useEffect(()=>{
    fetch("http://localhost:3001/posts")
    .then(response => response.json())
    .then(data => setPosts(data))
  },[])

  useEffect(()=>{
    fetch("http://localhost:3001/users")
    .then(response => response.json())
    .then(data => setUsersArr(data))
  },[])


  function onUpdatePost(updatedPost){
    const updatedPosts = posts.map(post =>{
      if(post.id === updatedPost.id){
        return updatedPost
      }
      else {
        return post
      }
    })
    setPosts(updatedPosts)
  }
console.log(posts)
  const listofPosts = posts.map(post => {
    return <Posts addComment = {onUpdatePost} addLike = {onUpdatePost} key = {post.id} post ={post}/>
  })

  function handleCameraClick(){
    navigate("/add-pictures")
  }

 


  <NewImgPage posts={posts} setPosts={setPosts}/>
  // function addNewImg(newImg){
  //   fetch("http://localhost:3001/posts",{
  //     method: "POST",
  //     headers:{
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newImg)
  //   })
  //   .then(res => res.json())
  //   .then(newImgData => setPosts([newImgData, ...posts]))
  // }

  return (
    <div className='main__feed'>
      <p> SOZ's Main Feed</p>

      <div className='sideBar'>

        <UserSearch search={search} setSearch={setSearch} />
        {search ==="" ? null : <UsersContainer usersArray={usersArr} search = {search} />}

        <FontAwesomeIcon icon={faCamera} onClick = {handleCameraClick} className ="cameraIcon"/>
        
        <button onClick={handleClickLogOut} className="button__logout">
          <span className="logoutButton__text">Log Out</span>
        </button>

      </div>

      {/* Main Feed Posts */}
      <div className = 'all-posts'>
        {listofPosts}
      </div>
      
    </div>


  )
}

export default MainFeed
