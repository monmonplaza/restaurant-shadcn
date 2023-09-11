import React from "react";

const Pills = ({ bgColor = "bg-success", label = "label" }) => {
  return (
    <span
      className={` text-white text-center py-[2px] px-2 text-[10px] ${bgColor} rounded-lg`}
    >
      {label}
    </span>
  );
};

export default Pills;
