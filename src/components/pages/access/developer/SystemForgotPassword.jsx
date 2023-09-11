import React from "react";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { RiMailSendFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SystemForgotPassword = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-secondary">
        <div className="w-full max-w-[420px] bg-primary border border-line px-8 py-10 rounded-md">
          <div className="reset__wrapper">
            <h2>Reset Password</h2>
            <p className="mb-6">
              We will send an instruction on how reset your password to your
              registered email address
            </p>
            <form action="">
              <div className="form__group">
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>

              <button className="btn btn--accent w-full">
                Send Instruction <ButtonSpinner />
              </button>

              <Link
                to="/"
                className="block mt-6 text-center text-xs hover:text-accent"
              >
                Back to Login
              </Link>
            </form>
          </div>

          <div className="success__wrapper">
            <RiMailSendFill className="text-accent text-4xl mb-2" />
            <h2>Instruction Sent!</h2>
            <p>
              We have successfully send the instruction on your email. If you
              did not receive any email, check if it goes in your spam
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemForgotPassword;
