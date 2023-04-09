import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pomodoro } from "./Pomodoro";
import { ShortBreak } from "./ShortBreak";
import { LongBreak } from "./LongBreak";

export const Timer = () => {
  const [showing, setShowing] = useState("Pomodoro");

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${   showing === "Pomodoro" && "transition-all duration-700 ease-in-out bg-blue-400" ||  showing === "ShortBreak" &&           "transition-all duration-700 ease-in-out bg-red-400" ||  showing === "LongBreak" &&           "transition-all duration-700 ease-in-out bg-green-400" } `}>
      <div className="flex gap-4">
        <button onClick={() => setShowing("Pomodoro")} className="font-bold text-white">Pomodoro</button>
        <button onClick={() => setShowing("ShortBreak")} className="font-bold text-white">Short Break</button>
        <button onClick={() => setShowing("LongBreak")} className="font-bold text-white">Long Break</button>
      </div>

      <div>
        <div className={` `}>
          {showing === "Pomodoro" && <Pomodoro />}
        </div>
        <div className={``}>
          {showing === "ShortBreak" && <ShortBreak />}
        </div>
        <div className={` `}>
          {showing === "LongBreak" && <LongBreak />}
        </div>
      </div>
    </div>
  );
};
