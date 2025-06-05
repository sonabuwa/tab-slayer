import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Timeinput.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Timeinput() {
  const navigate = useNavigate();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    navigate("/countdown", {
      state: { totalSeconds },
    });
  };

  return (
    <div className="timeinput-page">
      <div className="timer-card">
        <i class="bi bi-stopwatch"></i>
        <h1 className="timeinput-heading text-center">SET TIMER</h1>

        <div className="timer-dropdowns">
          <div className="selectHours" data-label="Hours">
            <select
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>

          <div className="selectMinutes" data-label="Minutes">
            <select
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>

          <div className="selectSeconds" data-label="Seconds">
            <select
              value={seconds}
              onChange={(e) => setSeconds(Number(e.target.value))}
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="start-button " onClick={handleStart}>
          START
        </button>
      </div>
    </div>
  );
}
