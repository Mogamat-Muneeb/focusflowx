import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ResetIcon } from "./Icons";
import { Modals } from "./Modals";
import { ProgressBar } from "./ProgressBar";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { auth, db } from "../firebase";
import { useContext } from "react";
import tickingClock from "../assets/tickingClock.mp3"
export const Pomodoro = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [finishTime, setFinishTime] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const tickingAudio = new Audio(tickingClock); 

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
        setProgress(((25 * 60 - (time - 1)) / (25 * 60)) * 100);
        tickingAudio.play();
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setProgress(0);
      setShowModal(true);
      setFinishTime(new Date());
    }

    return () =>{
      clearInterval(interval);
      tickingAudio.pause();
    } 
  }, [isActive, time]);

  useEffect(() => {
    if (showModal) {
      setTime(25 * 60);
    }
  }, [showModal]);
  const handleStart = () => {
    setIsActive(true);
    setStartTime(new Date());
    tickingAudio.play();
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
    setProgress(0);
    setStartTime(null);
    setFinishTime(new Date());
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;


  // useEffect(() => {
  //   const tickingAudio = new Audio(tickingClock);
  //   if (isActive) {
  //     tickingAudio.play();
  //     tickingAudio.currentTime = 1;
  //   } else {
  //     tickingAudio.pause();
  //     tickingAudio.currentTime = 0;
  //   }
  //   return () => {
  //     tickingAudio.pause();
  //     tickingAudio.currentTime = 0;
  //   };
  // }, [isActive]);
  // const saveData = async () => {
  //   if ((isActive && time > 0) || (isActive && time === 0)) {
  //     await setDoc(doc(db, "sessions", currentUser.uid), {
  //       date: new Date(),
  //       startTime: startTime,
  //       finishTime: finishTime,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   saveData();
  // }, [saveData]);

  return (
    <>
      <ProgressBar progress={progress} />
      <div className="flex flex-col justify-center w-full">
        {showModal && (
          <>
            <Modals setShowModal={setShowModal} name={"Pomodoro"} />
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
              className="px-14 py-3 bg-white rounded text-[20px] font-bold text-blue-400"
            >
              Pause
            </button>
          ) : (
            <button
              onClick={handleStart}
              className="px-14 py-3 bg-white rounded text-[20px] font-bold text-blue-400 "
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
