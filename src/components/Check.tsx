import React, { useContext } from "react";
import { ToggleContext } from "../App";

const Check = ({ val }: { val: string }) => {
  const { checkBoxValues, setCheckBoxValues } = useContext(ToggleContext);
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (val === "lowercase")
      setCheckBoxValues({
        ...checkBoxValues,
        lowercase: e.target.checked ? true : false,
      });
    if (val === "uppercase")
      setCheckBoxValues({
        ...checkBoxValues,
        uppercase: e.target.checked ? true : false,
      });
    if (val === "number")
      setCheckBoxValues({
        ...checkBoxValues,
        numbers: e.target.checked ? true : false,
      });
    if (val === "special")
      setCheckBoxValues({
        ...checkBoxValues,
        symbols: e.target.checked ? true : false,
      });
  };
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        id="some_id"
        className="
  relative peer shrink-0
  appearance-none w-3 h-3  rounded-sm bg-white
  mt-1
  checked:bg-purple-1 checked:border-0 dark:bg-purple-3 dark:checked:bg-purple-1 dark:checked:border-0"
        onChange={handleChanges}
      />
      <svg
        className="
    absolute 
    w-3 h-3 mt-1
    hidden peer-checked:block pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default Check;
