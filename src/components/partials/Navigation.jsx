import { setIsFoodOpen } from "@/store/StoreAction.jsx";
import { StoreContext } from "@/store/StoreContext.jsx";
import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaCaretRight, FaHome, FaReceipt } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdTableRestaurant } from "react-icons/md";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleOpenSubMenu = () => {
    dispatch(setIsFoodOpen(!store.isFoodOpen));
  };

  return (
    <>
      <nav className="h-full">
        <div className="flex flex-col justify-between h-full">
          <ul>
            <li className="nav-item">
              <FaHome />
              <Link to="/">Dashboard</Link>
            </li>
            <li className="nav-item  ">
              <FaReceipt />
              <Link to="/">Order</Link>
            </li>

            <li className={`has__dropdown ${store.isFoodOpen ? "active" : ""}`}>
              <div className="">
                <ImSpoonKnife
                  className="text-xl
              "
                />
                <button
                  className="w-full flex justify-between items-center"
                  onClick={handleOpenSubMenu}
                >
                  Food
                  <span>
                    <FaCaretRight />
                  </span>
                </button>
              </div>

              {store.isFoodOpen && (
                <ul className="py-1">
                  <li className="nav-subitem ">
                    <Link to="/">Food List</Link>
                  </li>

                  <li className="nav-subitem ">
                    <Link to="/">Category</Link>
                  </li>
                  <li className="nav-subitem">
                    <Link to="/">Tag</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item ">
              <MdTableRestaurant />
              <Link to="/">Table</Link>
            </li>
          </ul>

          <div className="flex flex-col items-center">
            <button className="mb-2">
              <span className="wrap w-[45px] h-[25px] bg-slate-200 flex items-center rounded-2xl border border-gray-200  shadow-sm">
                <span
                  className={`circle w-[18px] h-[18px]  bg-white flex justify-center items-center rounded-full transition-transform
                         `}
                >
                  <BsMoonFill className="text-[10px]" />
                  {/* <BsSunFill /> : <BsMoonFill /> */}
                </span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
