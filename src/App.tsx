import bg from "./assets/images/color-bg.webp";
import darkbg from "./assets/images/dark-bg.png";
import {
  CheckBoxContainer,
  Slider,
  ToggleButtons,
} from "../src/components/index";
import { createContext, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface Props {
  length: number;
  checkBoxValues: {
    lowercase: boolean;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
  };
}

const generatePassword = ({ length, checkBoxValues }: Props) => {
  if (
    !checkBoxValues.lowercase &&
    !checkBoxValues.uppercase &&
    !checkBoxValues.numbers &&
    !checkBoxValues.symbols
  ) {
    return "Please select atleast one option";
  }

  let pass: string = "";
  //special ascii 33-47
  //numbers 48-57
  //uppercase 65-90
  //lowercase 97-122

  for (let i = 0; i < length; i++) {
    let charCode = Math.floor(Math.random() * 94) + 33;
    if (checkBoxValues.lowercase && charCode >= 97 && charCode <= 122) {
      pass += String.fromCharCode(charCode);
    } else if (checkBoxValues.uppercase && charCode >= 65 && charCode <= 90) {
      pass += String.fromCharCode(charCode);
    } else if (checkBoxValues.numbers && charCode >= 48 && charCode <= 57) {
      pass += String.fromCharCode(charCode);
    } else if (checkBoxValues.symbols && charCode >= 33 && charCode <= 47) {
      pass += String.fromCharCode(charCode);
    } else {
      i--;
    }
  }

  return pass;
};

export const ToggleContext = createContext<any>(null);

const App = () => {
  const [isAdvancedChecked, setIsAdvancedChecked] = useState(false);
  const [isDarkChecked, setIsDarkChecked] = useState(false);
  const [length, setLength] = useState(8);
  const [checkBoxValues, setCheckBoxValues] = useState({
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
  });
  const [password, setPassword] = useState("Click on generate to get password");

  const generate = () => {
    setPassword(generatePassword({ length, checkBoxValues }));
  };

  return (
    <ToggleContext.Provider
      value={{
        isAdvancedChecked,
        setIsAdvancedChecked,
        isDarkChecked,
        setIsDarkChecked,
        length,
        setLength,
        checkBoxValues,
        setCheckBoxValues,
      }}
    >
      <main
        className="flex flex-col max-w-full h-screen items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: isDarkChecked ? `url(${darkbg})` : `url(${bg})`,
        }}
      >
        <div className="main-container py-10 gap-2 flex flex-col items-center">
          <div className="flex flex-1 justify-between space-x-20 ">
            <h1 className="text-2xl font-semibold">PassGen Pro</h1>
            <ToggleButtons />
          </div>
          <Slider />
          <CheckBoxContainer />
          <button
            onClick={generate}
            className="bg-purple-1 w-[270px] text-white py-2 rounded-md text-xs hover:bg-purple-900 focus:border-none"
          >
            Generate
          </button>
          <div className="flex gap-2 px-2 w-[270px] bg-gray-100 mt-2 h-10 rounded-md items-center justify-between dark:bg-purple-3">
            <div className="text-sm">{password}</div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(password);
              }}
              className="hover:text-purple-1 hover:scale-150 hover:transform transition-all duration-300 ease-in-out "
            >
              <FaCopy />
            </button>
          </div>
        </div>
        <div
          className="bg-purple-300 mt-4 rounded-full w-10 h-10 text-xl text-purple-1 flex justify-center items-center hover:scale-125  
        hover:transform transition-all duration-300 ease-in-out dark:bg-purple-3 dark:text-purple-1 "
        >
          <a href="https://github.com/Gul-Sher-Khan">
            <FaGithub />
          </a>
        </div>
      </main>
    </ToggleContext.Provider>
  );
};

export default App;
