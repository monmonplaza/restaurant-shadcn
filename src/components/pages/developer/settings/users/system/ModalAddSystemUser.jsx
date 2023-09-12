import Combobox from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import { handleEscape } from "../../../../../helpers/functions-general";
import { queryData } from "../../../../../helpers/queryData";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";
import Modal from "../../../../../partials/wrapper/Modal";
const ModalAddSystemUser = ({ itemEdit, roles }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  // const getDeveloperRole = roles?.data.filter(
  //   (item) => item.role_is_developer === 1 && item.role_is_active === 1
  // );

  console.log(roles);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/user-system/${itemEdit.user_system_aid}`
          : "/v1/user-system",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["system"] });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));

        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            `Successfuly ${
              itemEdit
                ? `updated. ${emailMessage} ${
                    store.credentials.data.user_system_email ===
                    itemEdit.user_system_email
                      ? "You will be automatically logged out."
                      : ""
                  }`
                : "added, please check your email for verification."
            }`
          )
        );
        if (
          itemEdit &&
          store.credentials.data.user_system_email ===
            itemEdit.user_system_email
        ) {
          dispatch(setIsAccountUpdated(true));
        }
        dispatch(setIsAdd(false));
      }
    },
  });

  const initVal = {
    user_system_aid: itemEdit ? itemEdit.user_system_aid : "",
    user_system_fname: itemEdit ? itemEdit.user_system_fname : "",
    user_system_lname: itemEdit ? itemEdit.user_system_lname : "",
    user_system_email: itemEdit ? itemEdit.user_system_email : "",
    user_system_role: itemEdit ? itemEdit.user_system_role : "",
    // user_system_role_id: getDeveloperRole[0].role_aid,
    user_system_email_old: itemEdit ? itemEdit.user_system_email : "",
  };

  const yupSchema = Yup.object({
    user_system_fname: Yup.string().required("Required"),
    user_system_lname: Yup.string().required("Required"),
    // user_system_email: Yup.string().required("Required").email("Invalid email"),
    // user_system_role: Yup.string().required("Required"),
  });

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  handleEscape(() => handleClose());

  return (
    <>
      <Modal>
        <div className="modal__header relative mb-6">
          <h3> {itemEdit ? "Update" : "Add"} System User </h3>
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log(values);
            //mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="modal__body min-h-[20vh] ">
                  <div className="form__wrap">
                    <Input
                      label="First name"
                      type="text"
                      name="user_system_fname"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    <Input
                      label="Last name"
                      type="text"
                      name="user_system_lname"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    <Input
                      label="Email address"
                      type="text"
                      name="user_system_email"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    {/* <Combobox roles={roles} /> */}
                  </div>

                  <div className="form__wrapper">
                    <Select
                      onValueChange={(e) => e}
                      defaultValue="developer"
                      name="user_system_role"
                    >
                      <SelectTrigger className="w-[100%]">
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles?.length > 0 ? (
                          roles?.map((item, key) => {
                            return (
                              <SelectItem value={item.role_aid} key={key}>
                                {item.role_name}
                              </SelectItem>
                            );
                          })
                        ) : (
                          <option value="" disabled>
                            No data
                          </option>
                        )}
                      </SelectContent>
                    </Select>
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

export default ModalAddSystemUser;
