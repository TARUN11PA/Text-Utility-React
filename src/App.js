//import './App.css';
import About from './Components/About';
import Form from './Components/Form';
import Nabbar from './Components/Nabbar';
import React , { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  
  const [alert, setAlert] = useState(null );

    const showAlert = ( message , type ) => {
     setAlert({
       msg: message ,
       type: type 
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
   }
   const [mode, setmode] = useState("dark");

   const changeMode = () => {
    if (mode === "dark")
    {  
          showAlert("Dark mode has been enabled " , "Success");

      setmode("light");
      document.body.style.backgroundColor =  " white ";
    }
    else 
    {      
       showAlert("Light mode has been enabled ", "Success");

      setmode("dark");
      document.body.style.backgroundColor =  " darkblue";
    }
  }
  return (
    <>

{/* <Router>
      <Nabbar title="TextUtils" mode={mode} changeMode={changeMode}/>
      <Alert Alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Form heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
        </Routes>
      </div>
   </Router> */}


    { <Router>
     <Nabbar Title="Texttils"  About="About Us"  mode = {mode} changeMode = {changeMode} />
        <Alert  Alert = {alert}  />
      <Routes>
        <Route  exact path="/Forme" element={<div><Form  heading="Enter Your content  "  showAlert = {showAlert} mode = {mode} /></div>} />
        <Route exact path="/About" element={<div><About/> </div>} />
      </Routes>
    </Router>

     }
    </>
  );
}

export default App;
