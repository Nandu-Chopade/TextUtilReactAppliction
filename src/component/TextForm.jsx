import React, {useState} from "react";



export function TextForm(props) {  // parent is App.js so here passing props to parent to child relationship 

    const [text , setText] = useState("");
    const handleUpClick = (event) =>{
        let newText = text.toUpperCase();
        setText(newText);
        event.preventDefault();
        props.showMessage("Converted to uppercase" , "success");

    }

    const handleLowerClick =(event)=>{
      event.preventDefault();
        let newText = text.toLowerCase();
        setText(newText);
        props.showMessage("Converted to lowercase" , "success");
    }

    const handleOnchange = (event) =>{
      event.preventDefault();
        setText(event.target.value);
      
    }
    
  const handleClearText = (event) => {
    event.preventDefault();
     setText("");
     props.showMessage("Text got clear " , "success");
  }

  const handleExtraSpaces = (event) => {
    event.preventDefault();
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showMessage("Extra Space was removed " , "success");
}

  return (
    <>
      <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <form>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label m-4">
              <h2>Enter the text to analyze below</h2>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              onChange={handleOnchange} 
              value={text}
      
              style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}
            ></textarea>
            <div className="col-auto m-2">
              <button disabled={text.length===0}  type="submit"  onClick={handleUpClick} className="btn btn-primary mb-3 mx-1">
                Convert Uppercase
              </button>
              <button disabled={text.length===0}  type="submit"  onClick={handleLowerClick} className="btn btn-primary mb-3 mx-1 ">
                Convert Lowercase
              </button>
              <button disabled={text.length===0}  type="submit"  onClick={handleClearText} className="btn btn-primary mb-3 mx-1">
                Clear Text
              </button>
              <button disabled={text.length===0}  type="submit"  onClick={handleExtraSpaces} className="btn btn-primary mb-3 mx-1">
                Clear Extra Spaces
              </button>
              
            </div>
          </div>
        </form>
        <div>
            <h3>Your Text Summary</h3>
          <p>{text.split(/\s+/).filter((element) => { return  element.length !== 0}).length} word and {text.length} charector</p>
          <p>{0.008 * text.split(/\s+/).filter((element) => { return  element.length !== 0}).length} minutes to read</p>
           <h3>Preview</h3>
           <p>{text.length > 0 ? text : "nothing to preview !"}</p>
        </div>
      </div>
    </> // this is called fragment
  );
}
