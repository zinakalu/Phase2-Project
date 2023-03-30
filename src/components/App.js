import './App.css';
import NoMatch from './NoMatch';
import Login from './Login';
import MainFeed from './MainFeed';
import CreateAcct from './CreateAcct';
import { Routes, Route } from 'react-router-dom';
import Profilepage from './Profilepage';
import NewImgPage from './NewImgPage';
import AddNewImgForm from "./AddNewImgForm";
import {useState} from "react"


function App() {

  const [username, setUsername] = useState("")


  function onHandleUsername(username){
    setUsername(username)
  }

  return (
    <div className="App">

      <Routes>
          <Route path='/' element={ <Login onHandleUsername = {onHandleUsername} username={username}/> }/>

          <Route path='main_feed' element={ <MainFeed username ={username}/> }/>

          <Route path='create_account' element={ <CreateAcct /> }/>

          <Route path="profile-page/:id" element={<Profilepage username ={username}/>}/>

          <Route path="add-pictures" element = {<NewImgPage/>}/>

          <Route path='*' element={ <NoMatch /> }/>
      </Routes>


    </div>
  );
}

export default App;
