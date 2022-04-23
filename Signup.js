import React, { useState } from "react";
import Login from "./Login";


export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefautlt();
    if (!name || !email || password) {
      console.log("doesn't exist in local storage")
    } else {
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Passoword", JSON.stringify(password));
      // setLogin(!login);
    }
  };
  const ButtonClicked=()=>{
    {alert("Registration Successful please login to continue!")}
  }
 
  return (

    <div>
   
      <form onSubmit={handleSubmit} className="mysignup">
        <h1>Register</h1>

        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label>password</label>
          <input
            type="password"
            placeholder="Enter your passowrd"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <br />
        </div>
        <button style={{ color: "blue" }} onClick={ButtonClicked}>Sign up</button>
        <p style={{ color: "#41" }} onClick={handleSubmit}>Already have an account Login?</p>

      </form>
   <Login/>

    </div>
  );
}
