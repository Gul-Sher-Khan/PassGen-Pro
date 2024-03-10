import React, { useState, useContext } from "react";
import { ToggleContext } from "../App";

const ToggleButtons = () => {
  const {
    isAdvancedChecked,
    setIsAdvancedChecked,
    isDarkChecked,
    setIsDarkChecked,
  } = useContext(ToggleContext);

  const handleAdvancedToggle = () => {
    setIsAdvancedChecked(!isAdvancedChecked);
  };

  const handleDarkToggle = () => {
    setIsDarkChecked(!isDarkChecked);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex-col justify-end w-20">
      <label className="flex items-center cursor-pointer relative justify-end">
        <span className="mr-2 text-sm text-gray-600 relative top-[-5px]">
          {isAdvancedChecked ? "Basic" : "Advanced"}
        </span>
        <div className="">
          <input
            type="checkbox"
            className="hidden"
            checked={isAdvancedChecked}
            onChange={handleAdvancedToggle}
          />
          <div className="toggle-switch-bg bg-gray-300 w-6 h-3 rounded-full dark:bg-purple-1"></div>
          <div
            className={`toggle-switch-handle relative top-[-10px] bg-gray-500 ml-0.5 w-2 h-2 rounded-full transition-transform dark:bg-white ${
              isAdvancedChecked
                ? "transform translate-x-3"
                : "transform translate-x-0"
            }`}
          ></div>
        </div>
      </label>
      <label className="flex items-center cursor-pointer relative justify-end ml-4">
        <span className="mr-2 text-sm text-gray-600 relative top-[-5px]">
          {isDarkChecked ? "Light" : "Dark"}
        </span>
        <div className="">
          <input
            type="checkbox"
            className="hidden"
            checked={isDarkChecked}
            onChange={handleDarkToggle}
          />
          <div className="toggle-switch-bg bg-gray-300 w-6 h-3 rounded-full dark:bg-purple-1"></div>
          <div
            className={`toggle-switch-handle relative top-[-10px] bg-gray-500 ml-0.5 w-2 h-2 rounded-full transition-transform dark:bg-white ${
              isDarkChecked
                ? "transform translate-x-3"
                : "transform translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleButtons;
