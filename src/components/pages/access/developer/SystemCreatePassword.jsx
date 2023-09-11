import React from "react";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { GoCheckCircleFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
const SystemCreatePassword = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-secondary">
        <div className="w-full max-w-[420px] bg-primary border border-line px-8 py-10 rounded-md">
          <div className="code__wrapper">
            <h2>Verify Your Email</h2>
            <p className="mb-6">
              Please enter the 4 digit code set to your email
            </p>
            <form action="">
              <div className="flex gap-2 justify-center mb-6">
                <div className="">
                  <input type="text" className="w-[45px]" />
                </div>

                <div className="">
                  <input type="text" className="w-[45px]" />
                </div>

                <div className="">
                  <input type="text" className="w-[45px]" />
                </div>

                <div className="">
                  <input type="text" className="w-[45px]" />
                </div>
              </div>

              <button className="btn btn--accent w-full">
                Verify Code <ButtonSpinner />
              </button>
            </form>
          </div>

          <div className="set__password__wrapper">
            <h2>Create Password</h2>
            <p className="mb-6">
              Set password for this account. Make sure that both password are
              matched.
            </p>

            <form action="">
              <div className="form__group relative">
                <label htmlFor="">New Password</label>
                <input type="password" />
                <button className="absolute right-3 top-[40px]">
                  <FaEye />
                </button>
              </div>

              <div className="form__group relative">
                <label htmlFor="">Confirm Password</label>
                <input type="password" />
                <button className="absolute right-3 top-[40px]">
                  <FaEye />
                </button>
              </div>

              <div className="mb-6">
                <h5 className="mb-2">Password must contain:</h5>

                <ul>
                  <li className="flex gap-2 items-center mb-1">
                    <GoCheckCircleFill /> At least 8 characters
                  </li>

                  <li className="flex gap-2 items-center mb-1">
                    <GoCheckCircleFill /> At least one lowercase letter
                  </li>

                  <li className="flex gap-2 items-center mb-1">
                    <GoCheckCircleFill /> At least one uppercase letter
                  </li>

                  <li className="flex gap-2 items-center mb-1">
                    <GoCheckCircleFill /> At least one special character
                  </li>

                  <li className="flex gap-2 items-center mb-1">
                    <GoCheckCircleFill /> At least one number
                  </li>
                </ul>
              </div>

              <button className="btn btn--accent w-full">
                Set Password <ButtonSpinner />
              </button>
            </form>
          </div>

          <div className="success__wrapper">
            <GoCheckCircleFill className="text-accent text-4xl mb-2" />
            <h2>Password Set Success</h2>
            <p className="mb-6">
              You have successfully created a new password for this account.
            </p>
            <Link to="/" className="btn btn--accent">
              Continue to login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemCreatePassword;
