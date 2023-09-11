import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

const SystemLogin = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-secondary">
      <div className="w-full max-w-[420px] bg-primary border border-line px-8 py-10 rounded-md">
        <h2>Sign In - Developer</h2>
        <p className="mb-6">Enter the information used during registration</p>
        <form action="">
          <div className="form__group">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>

          <div className="form__group relative">
            <label htmlFor="">Password</label>
            <input type="password" />
            <button className="absolute right-3 top-[40px]">
              <FaEye />
            </button>
          </div>

          <Link className="text-xs block text-right mb-4 hover:text-accent">
            Forgot Password
          </Link>

          <button className="btn btn--accent w-full">
            Login <ButtonSpinner />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SystemLogin;
