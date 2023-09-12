import ServerError from "@/components/partials/ServerError.jsx";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdArchive, MdDelete, MdEdit, MdRestorePage } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
  setIsRestore,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import Footer from "../../../../../partials/Footer";
import NoData from "../../../../../partials/NoData";
import Pills from "../../../../../partials/Pills";
import SearchBar from "../../../../../partials/SearchBar";
import TableLoading from "../../../../../partials/TableLoading";
import ModalArchive from "../../../../../partials/modals/ModalArchive";
import ModalDelete from "../../../../../partials/modals/ModalDelete";
import TableSpinner from "../../../../../partials/spinners/TableSpinner";
const RolesList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isActive, setActive] = React.useState(null);
  let counter = 1;
  let active = 0;
  let inactive = 0;

  const {
    isLoading,
    isFetching,
    error,
    data: roles,
  } = useQueryData(
    "/v1/roles", // endpoint
    "get", // method
    "settings-roles" // key
  );

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.role_aid);
    setData(item);
    setActive(true);
  };

  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.role_aid);
    setData(item);
    setActive(false);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.role_aid);
    setData(item);
  };

  return (
    <>
      <div className="table__wrapper  bg-primary p-2 rounded-md ">
        {isFetching && !isLoading && <TableSpinner />}

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th className="header__action"></th>
            </tr>
          </thead>
          <tbody>
            {(isLoading || roles?.data.length === 0) && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  {isLoading ? (
                    <TableLoading count={20} cols={3} />
                  ) : (
                    <NoData />
                  )}
                </td>
              </tr>
            )}

            {error && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}

            {roles?.data.map((item, key) => {
              active += item.role_is_active === 1;
              inactive += item.role_is_active === 0;
              return (
                <tr key={key}>
                  <td>{counter++}.</td>
                  <td>{item.role_name}</td>
                  <td>{item.role_description}</td>

                  <td>
                    {item.role_is_active === 1 ? (
                      <Pills label="Active" bgColor="bg-success" />
                    ) : (
                      <Pills label="Inactive" bgColor="bg-disable" />
                    )}
                  </td>

                  <td>
                    <div className="table__action">
                      <HiDotsHorizontal />
                      <ul className="">
                        {item.role_is_active === 1 ? (
                          <>
                            <li className="tooltip" data-tooltip="Edit">
                              <button onClick={() => handleEdit(item)}>
                                <MdEdit />
                              </button>
                            </li>

                            <li className="tooltip" data-tooltip="Archive">
                              <button onClick={() => handleArchive(item)}>
                                <MdArchive />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="tooltip" data-tooltip="Delete">
                              <button onClick={() => handleDelete(item)}>
                                <MdDelete />
                              </button>
                            </li>

                            <li className="tooltip" data-tooltip="Restore">
                              <button onClick={() => handleRestore(item)}>
                                <MdRestorePage />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer record={roles?.count} active={active} inactive={inactive} />

      {store.isConfirm && (
        <ModalArchive
          mysqlApiArchive={`/v1/roles/active/${id}`}
          msg={"Are you sure you want to archive this role?"}
          item={dataItem.role_name}
          queryKey={"settings-roles"}
          isActive={isActive}
        />
      )}

      {store.isDelete && (
        <ModalDelete
          id={id}
          mysqlApiDelete={`/v1/roles/${id}`}
          msg="Are you sure you want to delete this role?"
          item={dataItem.role_name}
          queryKey={"settings-roles"}
        />
      )}
    </>
  );
};

export default RolesList;
