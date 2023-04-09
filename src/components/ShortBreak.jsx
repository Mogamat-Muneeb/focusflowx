import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ResetIcon } from "./Icons";
import { Modals } from "./Modals";
export const ShortBreak = () => {
  const [time, setTime] = useState(5 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      // alert('Time is up!');
      setShowModal(true)
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="">
          {showModal && 
      <>
      <Modals setShowModal={setShowModal} name={"Short break "}/>
      </>}
      <div>
        <h2 className="text-[120px] font-bold text-white">{`${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</h2>
      </div>
      <div className="flex items-center justify-center gap-4 ">
        {isActive === true ? (
          <button
            onClick={handlePause}
            className="px-10 py-3 bg-white rounded text-[20px] font-bold text-red-400"
          >
            Pause
          </button>
        ) : (
          <button
            onClick={handleStart}
            className="px-10 py-3 bg-white rounded text-[20px] font-bold text-red-400"
          >
            Start
          </button>
        )}

        {isActive === true && (
          <>
            <button onClick={handleReset}>
              <ResetIcon />
            </button>
          </>
        )}
      </div>
    </div>
  )
}


