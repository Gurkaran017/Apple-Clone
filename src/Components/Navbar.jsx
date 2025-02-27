import React, { useRef } from "react";
import AppleLogo from "../assets/images/Apple_Logo.png";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import {
  PiPackageLight,
  PiBookmarkSimpleLight,
  PiUserCircleLight,
  PiSignInLight,
} from "react-icons/pi";
import {FaTimes } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaGripLinesSolid } from "react-icons/lia";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = ({ isBagOpen, setIsBagOpen, isSearchOpen, setIsSearchOpen }) => {
  const dropdownRef = useRef(null);

  const toggleBag = () => {
    setIsBagOpen((prev) => !prev);
    setIsSearchOpen(false); // Close search when opening bag
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setIsBagOpen(false); // Close bag when opening search
  };

  const NavItems = (
    <>
      <li>
        <a>Store</a>
      </li>
      <li>
        <a>Mac</a>
      </li>
      <li>
        <a>iPad</a>
      </li>
      <li>
        <a>iPhone</a>
      </li>
      <li>
        <a>Watch</a>
      </li>
      <li>
        <a>AirPods</a>
      </li>
      <li>
        <a>TV & Home</a>
      </li>
      <li>
        <a>Entertainment</a>
      </li>
      <li>
        <a>Accessories</a>
      </li>
      <li>
        <a>Support</a>
      </li>
    </>
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-center bg-[#f5f5f7] z-50 relative">
        <div className="flex space-x-10 items-center text-gray-700 p-3">
          <img className="h-[18px]" src={AppleLogo} />
          <ul className="list-none flex space-x-9 items-center text-xs">
            {NavItems}
          </ul>
          <IoIosSearch
            className="text-lg cursor-pointer"
            onClick={toggleSearch}
          />
          <IoBagOutline
            className="text-lg cursor-pointer"
            onClick={toggleBag}
          />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between px-4 py-3 items-center bg-[#f5f5f7]">
      <img className="h-[22px]" src={AppleLogo} />
        <div className="flex items-center space-x-5 text-gray-600">
          <IoIosSearch
            className="text-2xl cursor-pointer"
            onClick={toggleSearch}
          />
          <IoBagOutline
            className="text-xl cursor-pointer"
            onClick={toggleBag}
          />
          <button onClick={toggleMenu}>
            {isOpen ? (
              <RxCross1 className="font-thin text-xl" />
            ) : (
              <LiaGripLinesSolid className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="z-20 lg:hidden bg-[#f5f5f7] absolute left-0 top-0 min-h-full w-full shadow-md p-4">
          <div onClick={toggleMenu} className="flex justify-end">
            <RxCross1 className="font-thin text-xl" />
          </div>
          <ul className="flex flex-col space-y-3 text-2xl font-medium p-7 text-gray-900">{NavItems}</ul>
        </div>
      )}

      {/* Search Dropdown in DESKTOP (Same Style as Bag) */}
      {isSearchOpen && (
        <div
          ref={dropdownRef}
          className=" hidden absolute top-10 lg:flex w-full bg-[#f5f5f7] p-11 shadow-lg rounded-lg"
          style={{ zIndex: 1000 }}
          onMouseLeave={() => setIsSearchOpen(false)}
        >
          <div className="mx-36">
            <div className="flex items-center ">
              <IoIosSearch className="text-2xl" />
              <input
                type="text"
                placeholder="Search apple.com"
                className="w-3/4 p-2  text-lg outline-none bg-transparent placeholder:text-xl placeholder:text-gray-500 placeholder:font-medium"
              />
            </div>
            <div className="mt-5 text-gray-600 text-xs space-y-2">
              <p>Quick Links</p>
              <ul className="space-y-2 font-medium text-gray-700">
                <li className="cursor-pointer flex hover:text-black">
                  <IoIosArrowRoundForward className="mt-[2px] mr-2" />
                  Find a Store
                </li>
                <li className="cursor-pointer flex hover:text-black">
                  <IoIosArrowRoundForward className="mt-[2px] mr-2" />
                  Accessories
                </li>
                <li className="cursor-pointer flex hover:text-black">
                  <IoIosArrowRoundForward className="mt-[2px] mr-2" />
                  AirPods
                </li>
                <li className="cursor-pointer flex hover:text-black">
                  <IoIosArrowRoundForward className="mt-[2px] mr-2" />
                  Apple Intelligence
                </li>
                <li className="cursor-pointer flex hover:text-black">
                  <IoIosArrowRoundForward className="mt-[2px] mr-2" />
                  Apple Trade In
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Bag Dropdown DESKTOP */}
      {isBagOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-10 flex w-full bg-[#f5f5f7] p-11 shadow-lg rounded-lg"
          style={{ zIndex: 1000 }}
          onMouseLeave={() => setIsBagOpen(false)}
        >
          <div className="mx-36">
            <h2 className="text-2xl font-medium text-gray-700">
              Your Bag is empty.
            </h2>
            <p className="text-blue-500 my-7 text-xs cursor-pointer">
              Sign in{" "}
              <span className="text-gray-500">
                to see if you have any saved items
              </span>
            </p>

            {/* Profile Section */}
            <div className="mt-4 text-gray-700 text-xs">
              <p className="mb-2">My Profile</p>
              <ul className="space-y-3 font-semibold">
                <li className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <PiPackageLight /> Orders
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <PiBookmarkSimpleLight /> Your Saves
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <PiUserCircleLight /> Account
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <PiSignInLight /> Sign in
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Search Dropdown in MOBILE (Same Style as Bag) */}
      {isSearchOpen && (
        <div
          ref={dropdownRef}
          className=" lg:hidden absolute top-0 flex-col w-full bg-[#f5f5f7] p-3 min-h-full shadow-lg rounded-lg"
          style={{ zIndex: 1000 }}
          onMouseLeave={() => setIsSearchOpen(false)}
        >
          <div onClick={toggleSearch} className="flex justify-end">
            <RxCross1 className="font-thin text-xl" />
          </div>
          <div className="p-10">
            <div className="flex items-center ">
              <IoIosSearch className="text-3xl mb-2" />
              <input
                type="text"
                placeholder="Search "
                className="w-3/4 p-2  text-lg outline-none bg-transparent placeholder:text-3xl placeholder:text-gray-500 placeholder:font-medium"
              />
            </div>
            <div className="mt-5 text-gray-600 text-lg p-3 space-y-2">
              <p>Quick Links</p>
              <ul className="space-y-2 font-medium text-gray-700">
                <li className="cursor-pointer flex hover:text-black">
                  <IoIosArrowRoundForward className="mt-[2px] mr-2" />
                  Find a Store
                </li>
                <li className="cursor-pointer flex hover:text-black">
                  <IoIosArrowRoundForward className="mt-[2px] mr-2" />
                  Accessories
                </li>
                <li className="cursor-pointer flex hover:text-black">
                  <IoIosArrowRoundForward className="mt-[2px] mr-2" />
                  AirPods
                </li>
                <li className="cursor-pointer flex hover:text-black">
                  <IoIosArrowRoundForward className="mt-[2px] mr-2" />
                  Apple Intelligence
                </li>
                <li className="cursor-pointer flex hover:text-black">
                  <IoIosArrowRoundForward className="mt-[2px] mr-2" />
                  Apple Trade In
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}


      {/* Bag Dropdown MOBILE */}
      {isBagOpen && (
        <div
          ref={dropdownRef}
          className="lg:hidden absolute top-0 flex-col w-full bg-[#f5f5f7] p-3 min-h-full shadow-lg rounded-lg"
          style={{ zIndex: 1000 }}
          onMouseLeave={() => setIsBagOpen(false)}
        >
          <div onClick={toggleBag} className="flex justify-end">
            <RxCross1 className="font-thin text-xl" />
          </div>
          <div className="p-10">
            <h2 className="text-2xl font-medium text-gray-700">
              Your Bag is empty.
            </h2>
            <p className="text-blue-500 my-7 text-xs cursor-pointer">
              Sign in{" "}
              <span className="text-gray-500">
                to see if you have any saved items
              </span>
            </p>

            {/* Profile Section */}
            <div className="mt-4 text-gray-700 text-xs">
              <p className="mb-2">My Profile</p>
              <ul className="space-y-3 font-semibold">
                <li className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <PiPackageLight /> Orders
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <PiBookmarkSimpleLight /> Your Saves
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <PiUserCircleLight /> Account
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <PiSignInLight /> Sign in
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
