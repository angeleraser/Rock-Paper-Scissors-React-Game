import React from "react";
import "./css/LoadScreen.css";
export const LoadScreen = () => {
  return (
    <div className="loading-screen h-screen w-full flex items-center justify-center">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};
