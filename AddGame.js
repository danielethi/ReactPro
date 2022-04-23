import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Game() {
  const [gamename,setGamename] = useState("");
  const [days, setDays] = useState(0);
  const[isadded,setIsadded]=useState(false)

  const addToList = () => {
    axios.post("http://localhost:3050/add", {
      gamename: gamename,
      days: days,
    });
    setIsadded(true)
  };
 
  return (
    <div className="addGame">
      <p>
        <b>Add Game</b>
      </p>

      <label htmlFor="gamename">gamename:</label>
      <input
        type="text"
        onChange={(event) => {
          setGamename(event.target.value);
        }}
      />

      <label htmlFor="daysSinceIplayed">daysSinceIplayed:</label>
      <input
        type="number"
        onChange={(event) => {
          setDays(event.target.value);
        }}
      />

      <button onClick={addToList}>Add To List</button>
      {isadded && <p style={{color:"green"}}>Successfully added to mongoDB!</p>}
    </div>
  );
}
