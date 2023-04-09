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
    <div className="flex flex-col items-center justify-center h-screen">
    <form className="flex flex-col gap-4 pt-10" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        className="w-[286px] border-b-2 h-8 rounded-sm placeholder:text-sm focus:outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-[286px] border-b-2 h-8 rounded-sm placeholder:text-sm focus:outline-none"
      />
      <button className="w-[286px] bg-gray-500 h-8 rounded-sm text-white flex items-center justify-center">
        Login
      </button>
      {err && "Something went wrong"}
    </form>
    <p className="text-sm">
      You do have an account? <Link to="/register">Register</Link>{" "}
    </p>
  </div>
  )
}


