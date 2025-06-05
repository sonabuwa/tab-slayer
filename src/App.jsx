import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Timeinput from "./Timeinput";
import CountDown from "./CountDown";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />, //Home directly here
    },
    {
      path: "/timeinput",
      element: <Timeinput />, //Timinput here
    },
    {
      path: "/countdown",
      element: <CountDown />, //countdown here
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
