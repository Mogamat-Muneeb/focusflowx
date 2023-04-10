import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-400">
       <Link to="/" className="font-extrabold text-[32px] text-white">focusflowx</Link>
      <h2 className="font-bold text-white text-[20px]">Login</h2>
    <form className="flex flex-col gap-4 pt-10" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        className="w-[286px] border-b-2 h-8 bg-transparent rounded-sm placeholder:text-sm placeholder:text-white text-white focus:outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-[286px] border-b-2 h-8 rounded-sm bg-transparent   placeholder:text-sm placeholder:text-white text-white focus:outline-none"
      />
      <button className="w-[286px] py-5 font-bold bg-white text-blue-400 h-8 rounded-sm  flex items-center justify-center">
        Login
      </button>
      {err && "Something went wrong"}
    <p className="flex items-start justify-start w-full gap-2 pt-10 text-sm font-semibold text-white">
      You do have an account? <Link to="/register">Register</Link>
    </p>
    </form>
  </div>
  )
}


