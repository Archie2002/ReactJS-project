import './App.css';
import Delayed from './Components/delayed'
import Error from './Components/error'
import Unique from './Components/unique'
import Republish from './Components/republish'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar1 from './Components/navbar'
import Detail from './Components/detail';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar1/>
        <Routes>
          <Route path="/delayed" element={<Delayed/>}></Route>
          <Route path='/delayed/detail' element={<Detail/>}></Route>
          <Route path="/unique" element={<Unique/>}/>
          <Route path="/error" element={<Error/>}/>
          <Route path="/republish" element={<Republish/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
