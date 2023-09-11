import React from "react";
import { Link, useLocation } from "react-router-dom";

import { StoreContext } from "../../store/StoreContext";
import { getUserType } from "../helpers/functions-general";

const BreadCrumbs = ({ param = "" }) => {
  const { dispatch } = React.useContext(StoreContext);
  const location = useLocation();
  //const urlRolePath = getUserType();

  let currentLink = "";
  const handleClick = () => {
    dispatch(setStartIndex(0));
    dispatch(setIsSearch(false));
  };

  const crumbs = location.pathname
    // .replace(`${urlRolePath}`, "")
    .replace(`v2`, "")
    .replace("-", " ")
    .split("/")
    .filter((crumb) => crumb !== "");

  return (
    <>
      <div className="breadcrumbs">
        <ul className="flex mr-4 gap-10">
          <li>
            <Link to={`/home`} className="capitalize" onClick={handleClick}>
              Home
            </Link>
          </li>
          {crumbs.map((link, key) => {
            currentLink += `/${link.replace(" ", "-")}`;
            return (
              <li
                className="text-[12px] opacity-70 hover:underline relative hover:opacity-100 hover:before:opacity-70 last:after:hidden last:opacity-100  last:pointer-events-none"
                key={key}
              >
                <Link
                  to={`${currentLink}${param}`}
                  className="capitalize"
                  onClick={handleClick}
                >
                  {link.replace("-", " ").replace("_", "/")}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BreadCrumbs;
