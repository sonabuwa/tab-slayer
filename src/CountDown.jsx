import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Countdown.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Countdown() {
  const location = useLocation();
  const navigate = useNavigate();
  const totalTime = location.state?.totalSeconds;

  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(true);

  function handleClick() {
    navigate("/timeinput");
  }

  function reset() {
    setTimeLeft(totalTime); // Reset the timer to the initial total time
    setIsRunning(false); // Pause the timer after resetting
  }

  useEffect(() => {
    if (!totalTime) {
      navigate("/"); // Go back if no time is set
    }
  }, [totalTime, navigate]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const percentage = (timeLeft / totalTime) * 100;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="countdown-container">
      <i class="bi bi-stopwatch"></i>
      <div className="sub-cont">
        <i class="bi bi-arrow-left" onClick={handleClick}></i>
        <h1 className="countdown-title">TIMER</h1>
      </div>
      <div className="circle-wrapper">
        <svg width="200" height="200">
          <circle
            stroke="#e6e6e6"
            fill="transparent"
            r={radius}
            cx="100"
            cy="100"
            strokeWidth="12"
          />
          <circle
            stroke="#a604c9"
            fill="transparent"
            r={radius}
            cx="100"
            cy="100"
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
          />
        </svg>
        <div className="timer-text">{formatTime(timeLeft)}</div>
      </div>
      <div className="resume-pause-btn">
        <i class="bi bi-arrow-clockwise" onClick={reset}></i>
        <button
          className="pause-button"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "PAUSE" : "RESUME"}
        </button>
      </div>
    </div>
  );
}
