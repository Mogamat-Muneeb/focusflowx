import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ExitIcon } from "./Icons"
export const Modals = ({setShowModal , name}) => {


  return (
<div>
    
<div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75"  onClick={() => setShowModal(false)}>
          <div className="flex items-start p-6 bg-white rounded-lg">
            <div>
                <h2 className="mb-4 text-2xl font-bold">Time's Up!</h2>
                <p>Your {name} session has ended.</p>
            </div>
            <div className="flex items-start justify-end pt-1">
                <button onClick={() => setShowModal(false)}><ExitIcon /></button>
            </div>
          </div>
        </div>

</div>
  )
}


