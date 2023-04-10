import { async } from '@firebase/util';
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

export const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit =async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });
    } catch (error) {
      setErr(true);
      console.log(error, "error");
    }}
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-red-400'>
          <Link to="/" className="font-extrabold text-[32px] text-white">focusflowx</Link>
      <h2 className="font-bold text-white text-[20px]">Register</h2>
      <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start gap-5 pt-10 "
        >
          <input
            type="text"
            placeholder="Name"
            className="w-[286px] border-b-2 h-8 bg-transparent rounded-sm placeholder:text-sm placeholder:text-white text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-[286px] border-b-2 h-8 bg-transparent rounded-sm placeholder:text-sm placeholder:text-white text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[286px] border-b-2 h-8 bg-transparent rounded-sm placeholder:text-sm placeholder:text-white text-white focus:outline-none"
          />
          <button  className="w-[286px] py-5 font-bold bg-white text-red-400 h-8 rounded-sm  flex items-center justify-center">
            Sign Up
          </button>
              {err && "Something went wrong"}
    <p className="flex items-start justify-start w-full gap-2 text-sm font-semibold text-white">
       Have an account? <Link to="/login">Login</Link>
    </p>
        </form>
    </div>
  )
}

