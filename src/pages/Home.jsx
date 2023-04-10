import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import {Timer } from "../components/Timer"

export const Home = () => {
  return (
    <div className="">
      <Timer/>
    </div>
  );
};


