import React from "react";

export default function Intro({ icon, heading, text }) {
  return (
    <>
      <div className="d-flex container">
        <div className="p-2 flex-shrink-1 align-self-center icon sub-container1">
          {icon}
        </div>
        <div className=" p-2  flex-grow-1  align-self-center sub-container2">
          <h1 className="sub-heading">{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
