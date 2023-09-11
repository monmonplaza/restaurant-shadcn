import React from "react";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import WindowSpinner from "../../../../../partials/spinners/WindowSpinner";
import RolesList from "./RolesList";
import { setIsAdd } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import ModalAddRoles from "./ModalAddRoles";
import Toast from "../../../../../partials/Toast";

const Roles = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

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
              <h1>System Roles</h1>
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
            <RolesList setItemEdit={setItemEdit} />
          </div>
        </main>
      </section>
      {/* <WindowSpinner /> */}
      {store.isAdd && <ModalAddRoles itemEdit={itemEdit} />}
      {/* <ModalError /> */}
      {/* <ModalConfirm /> */}
      {/* <ModalDelete /> */}
      {/* <ModalSuccess /> */}
      {/* <ModalInfo /> */}

      {/* {store.validate && <ModalValidation />}
      {store.success && <Toast />} */}
    </>
  );
};

export default Roles;
