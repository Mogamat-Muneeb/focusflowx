import React from "react";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import {Timer } from "../components/Timer"

export const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="">

      {/* <Link to="/login">        Login</Link>

      {currentUser && (s
        <div>
          <button onClick={() => signOut(auth)}> Logout</button>
        </div>
      )} */}
      <Timer/>
    </div>
  );
};


