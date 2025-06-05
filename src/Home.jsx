import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Intro from "./Intro";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1 id="main_heading">
        Take Control of <br />
        Your Time{" "}
      </h1>
      <Intro
        icon={<i class="bi bi-alarm"></i>}
        heading={"Track your time"}
        text={
          "Understand how you spend your time on social media or in websites"
        }
      />
      <Intro
        icon={<i class="bi bi-bug"></i>}
        heading={"Set Meaningful Goals"}
        text={"Targets and limits to keep you motivated and on track"}
      />
      <Intro
        icon={<i class="bi bi-arrow-down"></i>}
        heading={"Get Insights"}
        text={"Visual report and trends to help optimize your routine"}
      />
      <Btn navigate={navigate} />
    </>
  );
}

export function Btn({ navigate }) {
  return (
    <>
      <button className="b" onClick={() => navigate("/timeinput")}>
        Get Started
      </button>
    </>
  );
}
