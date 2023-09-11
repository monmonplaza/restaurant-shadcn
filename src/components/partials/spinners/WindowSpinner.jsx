import React from "react";
import Spinner from "./Spinner";

const WindowSpinner = () => {
  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-50 justify-center flex items-center flex-col text-center bg-white/90">
        <Spinner diameter="w-[50px]" color="stroke-accent" />
        <span className="mt-1 text-gray-500">Loading...</span>
      </div>
    </>
  );
};

export default WindowSpinner;
