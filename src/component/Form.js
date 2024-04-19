import React, { useState } from 'react'
const Form = (props) => {
    const [text,settext]=useState("");
    const change=(event)=>{
        settext(event.target.value);
        
    }
    
    const changeUP=()=>{
        let t=text.toUpperCase();
        settext(t);
        props.showalert("Uppercase Enable",'success : ');
    }
    const changelo=()=>{
        let t=text.toLowerCase()
        settext(t);
        props.showalert("Lowercase Enable",'success : ');
        
    }
    const clear=()=>{
        settext("");
        props.showalert("Clear",'success : ');
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
        props.showalert("Speak active",'success : ');
      }
      const copy = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Copied",'success : ');
      }
      const Space = () => {
        let t=text.split(/[ ]+/);
        settext(t.join(" "));
        props.showalert("Space removed",'success : ');
      }
    return ( 
<div className="mb-3 ">
<h2 className="">{props.heading}</h2>
<textarea className="form-control border border-black my-2" id="exampleFormControlTextarea1" style={{backgroundColor:(props.mode=="light"?"white":"#212529"),color:(props.mode=="light"?"black":"white")}} onChange={change} value={text} rows="10"></textarea>
<button type="button" disabled={text.length==0} onClick={changeUP} className={`my-2 btn  mx ${props.mode=="light"?"btn-dark":"btn-primary"}`}>UPPERCASE</button>
<button type="button" disabled={text.length==0} onClick={changelo} className={`my-2 btn ${props.mode=="light"?"btn-dark":"btn-primary"} mx-2`}>lowercase</button>
<button type="button" disabled={text.length==0} onClick={clear} className={`my-2 btn ${props.mode=="light"?"btn-dark":"btn-primary"} mx`}>Clear</button>
<button type="button" disabled={text.length==0} onClick={speak} className={`my-2 btn ${props.mode=="light"?"btn-dark":"btn-primary"} mx-2`}>Speak</button>
<button type="button" disabled={text.length==0} onClick={Space} className={`my-2 btn ${props.mode=="light"?"btn-dark":"btn-primary"} mx`}>Remove Space</button>
<button type="button" disabled={text.length==0} onClick={copy} className={`my-2 btn ${props.mode=="light"?"btn-dark":"btn-primary"} mx-2`}>Copy</button>
<h3 className='my-3'>Your Text Summary : </h3>
<p>{text.length===0?0:`${text.split(/\s+/).filter(word => word !== '').length}`} words, {text.length} Characters</p>

</div>

     );
}
 
export default Form;