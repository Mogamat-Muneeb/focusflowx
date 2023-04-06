import { async } from '@firebase/util';
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
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
    <div className='w-full flex justify-center items-center'>
      {/* Register */}
      <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start gap-5 pt-10 "
        >
          <input
            type="text"
            placeholder="Name"
            className="w-[286px] border-b-2 h-8 rounded-sm placeholder:text-sm focus:outline-none"
          />
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
            Sign Up
          </button>
        </form>
        {err && "Something went wrong"}
    </div>
  )
}

export default Register
