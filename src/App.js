import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import Typing from "./component/typing";
import Alert from "./component/alert";

function App() {
  const [mode,setmode]=useState("light");
  const toggle=()=>{
    if(mode=="dark"){
      setmode("light");
      document.body.style.backgroundColor="White"
      document.body.style.color="Black"
    }else{
      setmode("dark");
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
      
    }

  }
  return (
 <Router>
    <Navbar title='Text_Util' mode={mode} handle={toggle} />
   
        <Routes>
          <Route path="/" element={<div className="container"><Form heading="Enter Text To Analyze" mode={mode}/></div>} />
          {/* <Route path="/Form" element={<div className="container"><Form heading="Enter Text To Analyze"/></div>} /> */}
          <Route path="/typing" element={<Typing mode={mode}/>} />
        </Routes>
      </Router>
  );
}

export default App;

