import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ record = 0, active = 0, inactive = 0 }) => {
  return (
    <footer className="footer   absolute left-0 bottom-0 w-full px-6">
      <div className="flex justify-between border-gray-200 border-t pt-2 ">
        <ul className="flex gap-8 mr-7">
          <li>
            Record: <span>{record}</span>
          </li>
          <li>
            Active: <span>{active}</span>
          </li>
          <li>
            Inactive: <span>{inactive}</span>
          </li>
        </ul>

        <div className="flex gap-3">
          <Link className="text-xs">About</Link>
          <Link className="text-xs">Help</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
