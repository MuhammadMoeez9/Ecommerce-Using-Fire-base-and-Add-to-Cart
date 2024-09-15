import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpForm.css";
import { auth } from "./Firebase.Jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert ("Account Created")
      console.log("Account Created");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <br />
          <Link to="/Login" className="text-blue-900">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
