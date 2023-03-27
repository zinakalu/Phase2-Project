import './App.css';
import {Routes, Route} from "react-router-dom";
import Profilepage from './components/Profilepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="profile-page/:id" element={<Profilepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
