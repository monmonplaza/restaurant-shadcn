import React from "react";
import { FaCaretDown, FaCog, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./svg/Logo";

const Header = () => {
  return (
    <>
      <header className="py-2 px-4 bg-primary relative">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-3">
            <Link to="/" className="text-lg">
              <FaCog />
            </Link>

            <img
              src="https://via.placeholder.com/40x40"
              alt=""
              className="rounded-full"
            />

            <div className="text-right">
              <h5 className="-mb-1 leading-none text-sm">Monmon</h5>
              <small className="leading-none">Developer</small>
            </div>
            <FaCaretDown />
          </div>
        </div>

        {/* <div className="absolute top-[90%] right-2 bg-primary border border-line shadow-sm max-w-[270px] w-full p-3 rounded-md">
          <div className="text-center">
            <p className="-mb-1 text-black">Ramon Plaza</p>
            <small className="opacity-60">
              ramon.plaza@fronlinebusiness.com.ph
            </small>
            <ul className="mt-2">
              <li className="">
                <Link
                  to="/"
                  className="flex items-center gap-3 text-black text-xs p-2 hover:bg-secondary"
                >
                  <FaEdit /> View Profile
                </Link>
              </li>

              <li className="">
                <Link
                  to="/"
                  className="flex items-center gap-3 text-black text-xs p-2 hover:bg-secondary"
                >
                  <FaEdit /> Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
      </header>
    </>
  );
};

export default Header;
