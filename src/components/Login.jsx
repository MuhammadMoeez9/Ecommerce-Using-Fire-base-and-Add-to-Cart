import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./SignUpForm.css";
import { auth } from "./Firebase.Jsx";
import { signInWithEmailAndPassword } from "firebase/auth";
import Product from "./Product";
// import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // <Navigate to={"./Product"}></Navigate>;
      alert("Login Successfully")
      console.log("Login Succesfully");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button>Login</button>
        <p>
          Don't have an Account? <br></br>
          <Link to="/SignUpForm" className="text-blue-900">
            Create New Account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
