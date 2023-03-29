import './App.css';
import NoMatch from './NoMatch';
import Login from './Login';
import MainFeed from './MainFeed';
import CreateAcct from './CreateAcct';
import { Routes, Route } from 'react-router-dom';
import Profilepage from './Profilepage';
import AddNewImgForm from "./AddNewImgForm";


function App() {
  return (
    <div className="App">

      <Routes>
          <Route path='/' element={ <Login /> }/>

          <Route path='main_feed' element={ <MainFeed /> }/>

          <Route path='create_account' element={ <CreateAcct /> }/>

          <Route path="profile-page/:id" element={<Profilepage/>}/>

          <Route path="add-pictures" element = {<AddNewImgForm/>}/>

          <Route path='*' element={ <NoMatch /> }/>
      </Routes>


    </div>
  );
}

export default App;
