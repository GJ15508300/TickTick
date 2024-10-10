"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
  faCoffee,
  faMagnifyingGlass,
  faSearch,
  faSquareCheck,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import SearchModal from "./SearchModal";
import { useState } from "react";

const SideBar = ({ children }) => {
  const pathname = usePathname();
  const [openSearchModal, setOpenSearchModal] = useState(false);

  //   console.log("openSearchModal", openSearchModal);

  return (
    <>
      {openSearchModal ? (
        <SearchModal
          openSearchModal={openSearchModal}
          setOpenSearchModal={setOpenSearchModal}
        />
      ) : null}
      <div
        className="flex"
        // style={{backgroundColor:'red',}}
      >
        <nav
          className="bg-gray-100 w-50px min-h-screen p-3 flex flex-col space-y-4"
          // style={{backgroundColor:'red'}}
        >
          <Link
            href="/"
            className={`text-white justify-center flex hover:text-white transition ${
              pathname === "/" ? "font-bold" : ""
            }`}
          >
            <span className="bg-red-900 py-1 px-3 rounded-lg hover:text-white text-[1rem]">
              J
            </span>
          </Link>
          {/* <Link
            href="/about"
            className={`text-black hover:text-gray-300 transition ${
              pathname === "/about" ? "font-bold" : ""
            }`}
          >
            Preview
          </Link>
          <Link
            href="/profile"
            className={`text-black hover:text-gray-300 transition ${
              pathname === "/profile" ? "font-bold" : ""
            }`}
          >
            Profile
          </Link>
          <Link
            href="/settings"
            className={`text-black hover:text-gray-300 transition ${
              pathname === "/settings" ? "text-blue-400 font-bold" : ""
            }`}
          >
            Settings
          </Link> 
          <Link
            href="/darkTheme"
            className={`text-black hover:text-gray-300 transition ${
              pathname === "/darkTheme" ? "text-blue-400 font-bold" : ""
            }`}
          >
            Dark Theme
          </Link> */}
          <div
            className={` flex justify-center p-1 relative group`}
            onClick={() => {
              // setOpenSearchModal(true);
            }}
          >
            <FontAwesomeIcon
              icon={faSquareCheck}
              className={`text-[1.7rem] `}
            />
           
            <span className="absolute bottom-1 left-10 p-1.5 mb-1 text-xs text-white bg-black border border-gray-300 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              Task
            </span>
          </div>
          <div
            className={` flex justify-center p-1 relative group`}
            onClick={() => {
              // setOpenSearchModal(true);
            }}
          >
            <FontAwesomeIcon
              icon={faCalendarDays}
              className={`text-[1.5rem] `}
            />
           
            <span className="flex justify-center absolute bottom-1 left-10 p-1.5 mb-1 text-xs text-white bg-black border border-gray-300 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              Calendar View
            </span>
          </div>
          <div
            className={`flex justify-center relative group`}
            onClick={() => {
              setOpenSearchModal(true);
            }}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`${
                openSearchModal ? `text-blue-600` : `text-gray-600`
              } text-[1.3rem]`}
            />
             <span className="absolute bottom-1 left-10 p-1.5 mb-1 text-xs text-white bg-black border border-gray-300 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              Search
            </span>
          </div>
        </nav>

        <main className="flex-grow p-4">{children}</main>
      </div>
    </>
  );
};

export default SideBar;
