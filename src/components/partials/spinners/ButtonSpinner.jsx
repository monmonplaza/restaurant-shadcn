import React from "react";
import Spinner from "./Spinner";

const ButtonSpinner = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center rounded-full">
        <Spinner diameter="w-[20px]" color="stroke-white" />
      </div>
    </>
  );
};

export default ButtonSpinner;
