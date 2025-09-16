import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [delivery, setDelivery] = useState(true);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>

        {/* Delivery / Pickup Switch */}
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] relative">
          {/* Animation background */}
          <div
            className={`absolute top-1 bottom-1 w-1/2 bg-black rounded-full transition-all duration-300 ${
              delivery ? "left-1" : "left-1/2"
            }`}
          ></div>

          <button
            onClick={() => setDelivery(true)}
            className={`relative z-10 px-4 py-2 rounded-full transition-colors duration-300 ${
              delivery ? "text-white" : "text-black"
            }`}
          >
            Delivery
          </button>
          <button
            onClick={() => setDelivery(false)}
            className={`relative z-10 px-4 py-2 rounded-full transition-colors duration-300 ${
              !delivery ? "text-white" : "text-black"
            }`}
          >
            Pickup
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search food"
        />
      </div>

      {/* Cart */}
      <button className="border border-black px-5 bg-black text-white hidden md:flex items-center py-2 rounded-full hover:bg-white hover:text-black transition">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed bg-white w-[300px] h-screen z-10 left-0 top-0 duration-300"
            : "fixed bg-white w-[300px] h-screen z-10 left-[-100%] top-0 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer hover:rotate-90 transition"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-2 cursor-pointer text-gray-800">
            <li className="text-xl px-2 py-4 flex bg-white rounded-2xl hover:bg-gray-800 hover:text-white transition">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl px-2 py-4 flex bg-white rounded-2xl hover:bg-gray-800 hover:text-white transition">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl px-2 py-4 flex bg-white rounded-2xl hover:bg-gray-800 hover:text-white transition">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl px-2 py-4 flex bg-white rounded-2xl hover:bg-gray-800 hover:text-white transition">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl px-2 py-4 flex bg-white rounded-2xl hover:bg-gray-800 hover:text-white transition">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl px-2 py-4 flex bg-white rounded-2xl hover:bg-gray-800 hover:text-white transition">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl px-2 py-4 flex bg-white rounded-2xl hover:bg-gray-800 hover:text-white transition">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
