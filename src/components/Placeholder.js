import './App.css';
import Posts from './Posts';
import {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';

import MainFeed from './MainFeed';


function App() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(data => setPosts(data))
  },[])

  function onAddLike(updatedPost){
    console.log(updatedPost)
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

  const listofPosts = posts.map(post => {
    return <Posts addLike = {onAddLike} key = {post.id} post ={post}/>
  })

  return (
    <div className="App">
      <h1>Main Feed?</h1>
      {/* Main Feed Header */}
      <div className ="app_header">
        <img
          className="app_headerImage"
          src = ""
          alte= "Instagram"
          />
      </div>
      {/* Main Feed Header */}
      {/* listofposts*/}
      {listofPosts}
    </div>
  );
}

export default App;
