import React from "react";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <Link to="/login">        Login</Link>

      {currentUser && (
        <div>
          <button onClick={() => signOut(auth)}> Logout</button>
        </div>
      )}
      Home
    </div>
  );
};

export default Home;
