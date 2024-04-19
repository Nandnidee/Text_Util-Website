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
const [alert,setalert]=useState(null);

const show=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
 setTimeout(()=>{
  setalert(null)
 },1000)
}
  const toggle=()=>{
    if(mode=="dark"){
      setmode("light");
      document.body.style.backgroundColor='white';
      document.body.style.color="Black";
    
      show("Dark mode has been Enable","success : ");
    }else{
      setmode("dark");
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
      show("light mode has been Enable","success : ");
      
    }

  }
  return (
 <Router>
    <Navbar title='Text_Util' mode={mode} handle={toggle}  />
      <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<div className="container"><Form heading="Enter Text To Analyze" mode={mode} showalert={show} /></div>} />
          {/* <Route path="/Form" element={<div className="container"><Form heading="Enter Text To Analyze"/></div>} /> */}
          <Route exact path="/typing" element={<Typing mode={mode}/>} />
        </Routes>
      </Router>
  );
}

export default App;

