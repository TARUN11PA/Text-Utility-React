import React from 'react'

export default function Alert(props) {
   

  return (
    <div style={{height:'50px'}}>
  { props.Alert && <div className="alert alert-warning alert-dismissible fade show">
  {props.Alert.type} {props.Alert.msg} 
</div>}
</div>
    
  )
}
