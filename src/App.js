// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Api from './components/Api';
import UpdateRecord from './components/UpdateRecord';
import UpdateRecord1 from './components/UpdateRecord1';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";
import AddRecord from './components/AddRecord';


function App() {
  return (
    <>

    <Router>
    <Navbar title="Covid" first="Add Covid Record"/>
    <Routes>

    <Route excate path='/' element={<Api/>} />
    <Route excate path='/addRecords' element={<AddRecord />}/>
    <Route excate path='/UpdateRecord1' element={<UpdateRecord1/>}/>
    

    </Routes>
    </Router>
    </>
  );
}

export default App;
