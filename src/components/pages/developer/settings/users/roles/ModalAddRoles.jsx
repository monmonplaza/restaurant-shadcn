import React from "react";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";
import Modal from "../../../../../partials/wrapper/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { StoreContext } from "../../../../../../store/StoreContext";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../../store/StoreAction";
import { InputText, InputTextArea } from "../../../../../helpers/FormInputs";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { handleEscape } from "../../../../../helpers/functions-general";
import { FaTimes } from "react-icons/fa";
import { queryData } from "../../../../../helpers/queryData";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ModalAddRoles = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  console.log(itemEdit);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/roles/${itemEdit.role_aid}` : "/v1/roles",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["settings-roles"] });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? `updated` : `added`}.`));
      }
    },
  });

  const initVal = {
    role_aid: itemEdit ? itemEdit.role_aid : "",
    role_name: itemEdit ? itemEdit.role_name : "",
    role_description: itemEdit ? itemEdit.role_description : "",
    role_name_old: itemEdit ? itemEdit.role_name : "",
  };

  const yupSchema = Yup.object({
    role_name: Yup.string().required("Required"),
    role_description: Yup.string().required("Required"),
  });

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  handleEscape(() => handleClose());

  return (
    <>
      <Modal>
        <div className="modal__header relative mb-6">
          <h3> {itemEdit ? "Update" : "Add"} Role </h3>
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // mutate data
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="modal__body min-h-[20vh] ">
                  <div className="form__wrap">
                    {itemEdit ? (
                      <p className="flex gap-1">
                        <span className="text-dark">Name:</span>
                        <span className="font-[600]">{itemEdit.role_name}</span>
                      </p>
                    ) : (
                      <Input
                        label="Name"
                        type="text"
                        name="role_name"
                        disabled={mutation.isLoading}
                      />
                    )}
                  </div>

                  <div className="form__wrap">
                    <Textarea
                      label="Description"
                      name="role_description"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="modal__action flex justify-end gap-4 mt-8">
                    <button
                      className="btn btn--accent"
                      disabled={mutation.isLoading}
                      type="submit"
                    >
                      {mutation.isLoading ? (
                        <ButtonSpinner />
                      ) : itemEdit ? (
                        "Save"
                      ) : (
                        "Add"
                      )}
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
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};

export default ModalAddRoles;
