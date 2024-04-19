import React from 'react'

function Alert(props) {
  const capital=(word)=>{
   word=word.toLowerCase();
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  return (
    <div style={{height:"100px"}}>
   {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show  `} role="alert">
   <strong>{capital(props.alert.type)}</strong>{capital(props.alert.msg)}
    
  </div>}
  </div>
  )
}

export default Alert