import React from "react";
import { setIsAdd } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Toast from "../../../../../partials/Toast";
import SystemUserList from "./SystemUserList";
import ModalAddSystemUser from "./ModalAddSystemUser";
import useQueryData from "@/components/custom-hooks/useQueryData";

const SystemUser = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const {
    isLoading,
    isFetching,
    error,
    data: roles,
  } = useQueryData(
    "/v1/roles", // endpoint
    "get", // method
    "roles" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <Header />
      <section className="main__grid ">
        <aside className="sidebar">
          <Navigation />
        </aside>
        <main className="p-6  bg-secondary relative">
          <BreadCrumbs param={location.search} />
          <div className="mt-10 mb-5 flex justify-between items-center">
            <div className="max-w-[420px] w-full">
              <h1>System Users</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. sequi
                odio reprehenderit debitis quos nemo temporibus!
              </p>
            </div>
            <button className="btn btn--accent py-1.5" onClick={handleAdd}>
              Add
            </button>
          </div>

          <div className="table__main ">
            <SystemUserList setItemEdit={setItemEdit} />
          </div>
        </main>
      </section>
      {/* <WindowSpinner /> */}
      {store.isAdd && (
        <ModalAddSystemUser itemEdit={itemEdit} roles={roles.data} />
      )}

      {store.validate && <ModalValidation />}
      {store.success && <Toast />}
    </>
  );
};

export default SystemUser;
