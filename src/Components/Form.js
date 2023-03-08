import React , {useState} from 'react'

export default function Form(props) {

     const handleUpClick = () =>{
   // console.log(" the handleup click function clicked");
    let newText = text.toUpperCase();
    setttext(newText);
    props.showAlert("Text is converted to upper case " , "Success")
  
  }  
  const handleOnChange = (event) =>{
   // console.log(" the handle on change function clicked");
    setttext(event.target.value);
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setttext(newText);
    props.showAlert("Text is converted to lower case " , "Success");
  }
  const Cleartext = () => {
    setttext(" ");
    props.showAlert("Text is cleared " , "Success")
  }
  const[text,setttext] = useState(" Enter the text here ");
  // settext(" you have clicked on handle up ");

  return (
    <>  
    <div className="form-floating container  mb-3  my-5" style={{backgroundColor : (props.mode == "light"? "white":"darkblue") , color:(props.mode == "light"? "black":"white")}} >
        <br></br>
        <h4>{props.heading}</h4>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows ="8" style={{backgroundColor : (props.mode == "light"? "white":"darkblue") , color:(props.mode == "light"? "black":"white")}}></textarea>
        <br></br>      
        <button  className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Upper Case </button>
        <button  className='btn btn-primary mx-2' onClick={handleLowClick}>Convert To Lower Case </button>
        <button  className='btn btn-primary mx-2' onClick={Cleartext}>Clear Text </button>
    </div>
    <div className="container my3" style={{ color:(props.mode == "light"? "black":"white")}}>
      <h2> Your text Summary </h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p> {0.008 * text.split(" ").length} Minutes required to read </p>
      <h2>Preview </h2>
      <p>{text}</p>
    </div>
    </>
  )
}
