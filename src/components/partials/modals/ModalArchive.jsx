import React from "react";

import Modal from "../wrapper/Modal";
import { FaQuestionCircle } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../helpers/queryData";
import ButtonSpinner from "../spinners/ButtonSpinner";
import { StoreContext } from "../../../store/StoreContext";
import {
  setIsConfirm,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../store/StoreAction";

const ModalArchive = ({ mysqlApiArchive, msg, item, queryKey, isActive }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiArchive, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      dispatch(setIsConfirm(false));

      if (data.success) {
        dispatch(setSuccess(true));
        dispatch(setMessage("Archived succesfully."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleClose = () => {
    dispatch(setIsConfirm(false));
  };

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      isActive: isActive ? 0 : 1,
    });
  };

  // handleEscape(() => handleClose());

  return (
    <>
      <Modal width="max-w-[480px]">
        <div className="modal__header mb-4 ">
          <h3 className="text-warning flex  items-end  gap-2">
            <FaQuestionCircle className="text-3xl" />
            <span className="text-lg">Confirm</span>
          </h3>
        </div>
        <div className="modal__body ">
          <p>You are about to archive this record, do you want to proceed?</p>
          <div className="modal__action flex justify-end gap-4 mt-8">
            <button
              className="btn btn--accent"
              disabled={mutation.isLoading}
              onClick={handleYes}
              type="submit"
            >
              {mutation.isLoading ? <ButtonSpinner /> : "Confirm"}
            </button>
            <button
              className="btn btn--cancel"
              disabled={mutation.isLoading}
              onClick={handleClose}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalArchive;
