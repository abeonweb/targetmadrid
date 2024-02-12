"use client";
import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
// import { UserContext } from "./UserProvider";

const Navbar = ({ handleNavClose }) => {
  const { user, setUser } = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);
  
  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSignOutUser = async ()=>{
    console.log("trigger sign out", user);
    // await signOutUser();
    // setUser(null);
    // setCurrentUser(null);
  }

  return (
    <header className="bg-white flex flex-col justify-center fixed w-full z-50 shadow-md px-0">
      {/* <div className="bg-orange-500 py-1">
          <ul className="flex flex-col lg:flex-row px-3 py-2 text-white text-sm gap-x-4">
          </ul>
        </div> */}
      <nav
        className="relative max-w-[1200px] flex items-center justify-between bg-white p-1 text-gray-700"
        role="navigation"
      >
        {/*Logo*/}
        <div>
          <Link
            href="/"
            title="Target Translation"
            // onClick={handleNavClose}
          >
            <Image
              width={180}
              height={100}
              src={"/logo.png"}
              alt=""
              className="w-24 h-auto px-2 py-2 self-center"
            />
          </Link>
        </div>
        <div className="inline-block h-8 mt-2 mb-2 mr-5 lg:hidden">
          <button
            id="nav_toggle"
            title="menu button"
            className="h-full w-full"
            onClick={handleMenuClick}
          >
            {isOpen ? (
              <XMarkIcon className="w-10 h-10 text-orange-500" />
            ) : (
              <Bars3BottomLeftIcon className="w-10 h-10 text-orange-500" />
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "" : "hidden"
          } absolute top-16 right-0 w-full shadow-2xl lg:shadow-none lg:inset-0 lg:relative lg:block`}
        >
          <ul className="flex flex-col bg-white tracking-wider font-medium text-xs text-orange-500 pt-4 pb-10 lg:py-0 lg:flex-row lg:items-center lg:justify-end lg:pr-10">
            <li className="px-3 py-2" onClick={handleMenuClick}>
              <Link href={"#"}>Traducciones</Link>
            </li>
            <li className="px-3 py-2" onClick={handleMenuClick}>
              <Link href={"#"}>Interpretaciones</Link>
            </li>
            <li className="px-3 py-2" onClick={handleMenuClick}>
              <Link href={"#"}>Traducciones Juradas</Link>
            </li>
            <li className="px-3 py-2" onClick={handleMenuClick}>
              <Link href={"#contact"}>Contacto</Link>
            </li>
            <li className="px-3 py-2" onClick={handleMenuClick}>
              {currentUser ? (
                <span onClick={handleSignOutUser} className="cursor-pointer">Sign out</span>
              ) : (
                <Link href={"/login"} >Login</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
