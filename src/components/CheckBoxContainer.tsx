import { useContext } from "react";
import { ToggleContext } from "../App";
import { Check } from "./index";

const CheckBoxContainer = () => {
  return (
    <div className=" flex-col w-80 ml-6 space-y-1 p-2 font-semibold">
      <div className="flex gap-1">
        <Check val={"number"} />
        <label className="text-xs" htmlFor="Numbers">
          Numbers
        </label>
        <p className="text-[10px] text-gray-600 flex items-end">{`(0-9)`}</p>
      </div>
      <div className="flex gap-1">
        <Check val={"uppercase"} />
        <label className="text-xs" htmlFor="Uppercase">
          Uppercase
        </label>
        <p className="text-[10px] text-gray-600 flex items-end">{`(A-Z)`}</p>
      </div>
      <div className="flex gap-1">
        <Check val={"lowercase"} />
        <label className="text-xs" htmlFor="Lowercase">
          Lowercase
        </label>
        <p className="text-[10px] text-gray-600  flex items-end">{`(a-z)`}</p>
      </div>
      <div className="flex gap-1">
        <Check val={"special"} />
        <label className="text-xs" htmlFor="Special">
          Special
        </label>
        <p className="text-[10px] text-gray-600 flex items-end">{`(!#@$%^&*)`}</p>
      </div>
    </div>
  );
};

export default CheckBoxContainer;
