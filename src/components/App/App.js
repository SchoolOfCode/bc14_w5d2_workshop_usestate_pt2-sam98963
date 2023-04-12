import React, { useState } from "react";
import "./App.css";
import Input from "../Input"
import Item from "../Item"

function App() {
  const [text, setText] = useState("")
  function handleChange(e){
    setText(e.target.value)
    console.log(text)
  }
  return (
    <div className="App">
      <h1>JSX will go here!</h1>
      <Input handleChange={handleChange}/>
      <Item text={text}/>
      <Item text={text}/>
      <Item text={text}/>
    </div>
  );
}

export default App;
