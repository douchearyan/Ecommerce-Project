import React from "react";
import Darkbutton from "../images/Darkmode.png";
import Lightbutton from "../images/Lightmode.png";
const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
//   console.log(element);
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  },[theme]);

  return (
    <div className="relative">
      <img
        src={Darkbutton}
        alt=""
        onClick={()=> setTheme(theme==="light"?"dark":"light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]
         transition-all duration-300 absolute right-0 z-10 ${theme==="dark"?"opacity-100":"opacity-0"}`}
      />
      <img
        src={Lightbutton}
        alt=""
        onClick={()=> setTheme(theme==="light"?"dark":"light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] 
        transition-all duration-300"
      />
    </div>
  );
};

export default Darkmode;
