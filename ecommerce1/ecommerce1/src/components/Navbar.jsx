import React from "react";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import shopsylogo from "../images/shopsylogo.png";
import Darkmode from "./Darkmode";
import { text } from "@fortawesome/fontawesome-svg-core";           


const Navbar = () => {

  

  const menu = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens wear",
      link: "/#",
    },
    {
      id: 5,
      name: "electronics",
      link: "/#",
    },
  ];
  const DropdownLinks = [{
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  }
 ];
  return (
    // <div className="flex flex-col gap-1">
    <div className="bg-[#fff0c4] dark:bg-[#dc9f55] py-3 shadow-md h-16">
      <div
        className="  flex items-center justify-between  gap-3 px-6 
      sm:px-20 lg:px-32 xl:px-40 2xl:px-52 container mx-auto"
      >
        <a href="#" className="flex ">
          <img src={shopsylogo} alt="logo" className=" w-9 " />
          <span className="text-black text-lg font-bold">shopsy</span>
        </a>
        <div className="flex items-center justify-between gap-2">
          {/* //this is a search bar */}
          <div className="relative group sm:block">
            <input
              type="text"
              placeholder="search"
              className=" border-1 w-[200px] sm:w-[200px] group-hover:w-[230px] transition-all
        duration-300 rounded-full px-2 py-1 focus:outline-none 
        focus:border-1"
            ></input>
            <div>
              <IoMdSearch
                className="text-gray-500 group-hover:text-gray-700
            absolute
            top-1/2 -translate-y-1/2 right-4 "
              />
            </div>
          </div>
          <div>
            {/* {"this is order button "} */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-[red] to-[yellow] transition-all duration=300 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
            >
              <span className="group-hover:block hidden transition-all duration-300 ">
                ShopNow
              </span>

              <FaShoppingCart className="w-6 h-5" />
            </button>
          </div>
          {/* theme switch button */}
          <div>
            <Darkmode />
          </div>
        </div>
      </div>
      {/* menubar */}
      <div className={`flex bg-white dark:bg-zinc-600 dark:text-white shadow-md justify-center mt-4 relative z-[99999]`} >
        <ul className=" sm:flex hidden items-center gap-4">
          {menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-orange-200 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending-Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 " />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
              <ul>
                {DropdownLinks.map((data) =>(
                  <li key={data.id}>
                    <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-orange-50">{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    // </div>
  );
};

export default Navbar;
