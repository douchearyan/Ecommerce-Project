import React, { useState } from "react";
("https://cdnjs.cloudflare.com/ajax/libs/simple-icons/14.3.0/simpleicons.svg");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {Button} from "./Button"
const navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen((prev) => !prev);
  };
  return (
    <div>
      <nav className="navbar text-white flex flex-column items-center justify-between">
        <a href="#" className="text-2xl font-bold border px-1 py-2">
          ARYAN'S WORKSPACE
        </a>
        {isOpen && (
          <div className="dropdown-menu absolute top-[49px] bg-[#ffffff30] w-full flex flex-col items-center gap-6 py-2 text-lg font-bold">
            <ul className="flex flex-col gap-6 items-center">
              <li className="hover:text-blue-500">Home</li>
              <li className="hover:text-blue-500">About Author</li>
              <li className="hover:text-blue-500">Testimonial</li>
              <li className="hover:text-blue-500">Lets'Connect</li>
            </ul>
            <div className="flex flex-col gap-6">
              <button className="hover:text-blue-500">LogIn</button>
              <button className="bg-[#ffffff70] rounded-lg">SignUp</button>
            </div>
          </div>
        )}

        <div className="toggle-button cursor-pointer mt-2" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </div>
  );
};

export default navbar;
