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
      <Item text={text} font="Tahoma"/>
      <Item text={text} font="Marker Felt"/>
      <Item text={text} font="Luminari"/>
    </div>
  );
}

export default App;
