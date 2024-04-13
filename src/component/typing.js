import React, { useState } from 'react';

function Typing(props) {
  const [typedText, setTypedText] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    setTypedText(inputText);

    let arr = original.split("");
    let arr2 = inputText.split("");

  
    for (let i = 0; i < arr2.length; i++) {
      if (arr[i] !== arr2[i]&&arr[i]!==' ') {
       arr[i]= "<span style='color: red;font-weight:bold;'>" + arr[i] + "</span>";
      }
      else if(arr[i]===' '&&arr[i] !== arr2[i]){
        arr[i]= "<span style='color: red;font-weight:bold;'>" + arr2[i] + "</span>";
      
      } 
      else{
        arr[i]= "<span style='color: #80FF4E;font-weight:bold;'>" + arr[i] + "</span>";
      }
    }
    let output = arr.join("");

    document.getElementById('originalText').innerHTML = output;
  };

  let original = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className='container'>
      <h2>Typing Test</h2>
      <div id="originalText" style={{ color: props.mode === "light" ? "gray" : "white" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <textarea className="form-control border border-black my-2" id="exampleFormControlTextarea2" style={{ backgroundColor: props.mode === "light" ? "white" : "#212529", color: props.mode === "light" ? "black" : "white" }} onChange={handleChange} value={typedText} rows="10"></textarea>
    </div>
  );
}

export default Typing;
