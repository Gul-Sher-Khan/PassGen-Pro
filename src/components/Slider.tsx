import { useContext } from "react";
import { ToggleContext } from "../App";

const Slider = () => {
  const { length, setLength } = useContext(ToggleContext);

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col w-80 p-4 gap-2  ">
      <div className="flex justify-between">
        <label htmlFor="myRange" className="text-xs">
          Length
        </label>
        <span className="bg-white w-10 h-5 pl-1 mb-1 rounded-[3px] text-xs dark:bg-purple-3">
          {length}
        </span>
      </div>
      <input
        type="range"
        min="6"
        max="21"
        className="rounded-lg appearance-none bg-white h-1.5 w-128 cursor-pointer dark:bg-gray-800/90"
        id="myRange"
        defaultValue={8}
        onChange={handleSlider}
      />
    </div>
  );
};

export default Slider;
