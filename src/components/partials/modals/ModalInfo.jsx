import React from "react";

import { FaInfoCircle } from "react-icons/fa";
import Modal from "../wrapper/Modal";

const ModalInfo = () => {
  return (
    <>
      <Modal>
        <div className="modal__header mb-4 ">
          <h3 className=" flex flex-col items-center justify-center gap-2">
            <FaInfoCircle className="text-4xl text-info" />
            <span className="text-xl">Information</span>
          </h3>
        </div>
        <div className="modal__body text-center">
          <p>Something went wrong! </p>
          <div className="modal__action flex justify-center gap-4 mt-8">
            <button className="btn btn--info">Close</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalInfo;
