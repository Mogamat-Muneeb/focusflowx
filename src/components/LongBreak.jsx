import React, { useState, useEffect } from "react";
import { ResetIcon } from "./Icons";
import { Modals } from "./Modals";
import { ProgressBar } from "./ProgressBar";
export const LongBreak = () => {
  const [time, setTime] = useState(15 * 60);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
        setProgress(((15 * 60 - (time - 1)) / (15 * 60)) * 100);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      // alert('Time is up!');
      setProgress(0);
      setShowModal(true);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);
  useEffect(() => {
    if (showModal) {
      setTime(15 * 60);
    }
  }, [showModal]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
    setProgress(0);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      <ProgressBar progress={progress} />
      <div className="flex flex-col justify-center w-full">
        {showModal && (
          <>
            <Modals setShowModal={setShowModal} name={"Long break "} />
          </>
        )}
        <div className="flex justify-center w-full">
          <h2 className="text-[120px] w-[350px] font-bold text-white">{`${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</h2>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          {isActive === true ? (
            <button
              onClick={handlePause}
              className="px-14 py-3 bg-white rounded text-[20px] font-bold text-green-400"
            >
              Pause
            </button>
          ) : (
            <button
              onClick={handleStart}
              className="px-14 py-3 bg-white rounded text-[20px] font-bold text-green-400"
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
    </>
  );
};
