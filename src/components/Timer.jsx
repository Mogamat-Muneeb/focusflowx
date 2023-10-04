import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pomodoro } from "./Pomodoro";
import { ShortBreak } from "./ShortBreak";
import { LongBreak } from "./LongBreak";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Timer = () => {
  const [showing, setShowing] = useState("Pomodoro");

  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center h-screen ${
          (showing === "Pomodoro" &&
            "transition-all duration-500 ease-in-out bg-blue-400") ||
          (showing === "ShortBreak" &&
            "transition-all duration-500 ease-in-out bg-red-400") ||
          (showing === "LongBreak" &&
            "transition-all duration-500 ease-in-out bg-green-400")
        } `}
      >
        {/* <div className={`flex justify-center items-center gap-52  pb-32   `}>
      {currentUser ? (
          <button onClick={() => signOut(auth)}  className="flex items-center gap-2 px-2 py-1 font-bold text-white bg-white rounded bg-opacity-30 "> Logout</button>
      ) : (
        <Link to="/login" className="flex items-center gap-2 px-2 py-1 font-bold text-white bg-white rounded bg-opacity-30 "><UserIcon/>Login</Link>
      )}
      <Link to="/" className="font-extrabold text-white">focusflowx</Link>

    </div> */}
        <Link to="/" className="mb-32 font-extrabold text-white text-[32px]">
          focusflowx
        </Link>
        <div className="flex gap-10">
          <button
            onClick={() => setShowing("Pomodoro")}
            className={`font-bold text-white ${
              showing === "Pomodoro" &&
              "px-2 py-1 bg-opacity-30   font-semibold rounded bg-white"
            }`}
          >
            Pomodoro
          </button>
          <button
            onClick={() => setShowing("ShortBreak")}
            className={`font-bold text-white ${
              showing === "ShortBreak" &&
              "px-2 py-1 bg-opacity-30  font-semibold rounded bg-white"
            }`}
          >
            Short Break
          </button>
          <button
            onClick={() => setShowing("LongBreak")}
            className={`font-bold text-white ${
              showing === "LongBreak" &&
              "px-2 py-1 bg-opacity-30   font-semibold rounded bg-white"
            }`}
          >
            Long Break
          </button>
        </div>

        <div>
          <div className={` `}>{showing === "Pomodoro" && <Pomodoro />}</div>
          <div className={``}>{showing === "ShortBreak" && <ShortBreak />}</div>
          <div className={` `}>{showing === "LongBreak" && <LongBreak />}</div>
        </div>
      </div>
    </>
  );
};
