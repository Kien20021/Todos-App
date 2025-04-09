import React, { useState } from "react";
import { DialogEdit } from "./dialogEdits/DialogEdit";
import DialogDelete from "./dialogDelete/DialogDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  setCloseDialogEdit,
  setOpenDialogEdit,
} from "../redux-toolkit/features/openDialogEditSlice";
import {
  setCloseDialogDelete,
  setOpenDialogDelete,
} from "../redux-toolkit/features/openDialogDeleteSlice";
import { setToggleCheckStatus } from "../redux-toolkit/features/checkStatusSlice";

const ItemTodo = ({ item, onEditTodo, onDeleteTodo, onToggleChecked }) => {
  const openDialogEdit = useSelector((state) => state.openDialogEdit.isOpen);
  const openDialogDelete = useSelector(
    (state) => state.openDialogDelete.isOpen
  );
  const isChecked = useSelector(
    (state) => state.checkStatus.checkedItems[item.id] || false
  );
  const dispatch = useDispatch();
  const showDialogEdit = () => {
    dispatch(setOpenDialogEdit());
  };
  const handleOkEdit = (data) => {
    onEditTodo(data);
    dispatch(setCloseDialogEdit());
  };
  const handleCancelEdit = () => {
    dispatch(setCloseDialogEdit());
  };

  const showDialogDelete = () => {
    dispatch(setOpenDialogDelete());
  };
  const handleOkDelete = (id) => {
    onDeleteTodo(id);
    dispatch(setCloseDialogDelete());
  };
  const handleCancelDelete = () => {
    dispatch(setCloseDialogDelete());
  };

  const handleCheckboxChange = (id) => {
    dispatch(setToggleCheckStatus(item.id));
    onToggleChecked(id);
  };
  return (
    <div className="flex justify-center  ">
      <div className="w-full  ">
        <div className=" flex justify-between items-center pl-11 pr-12 ">
          <div className="flex items-center   w-full ">
            <label
              htmlFor={`isCheck${item.id}`}
              className="w-5 h-5 border-2 border-darkbrown rounded-full peer  cursor-pointer relative flex items-center justify-center has-[input:checked]:border-lightorange">
              <input
                type="checkbox"
                className="hidden peer"
                id={`isCheck${item.id}`}
                checked={isChecked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <span className="absolute w-5 h-5 flex items-center justify-center opacity-0 transition-opacity duration-200 peer-checked:opacity-100">
                <i className="fa-solid fa-check text-lightorange text-xs"></i>
              </span>
            </label>
            <p
              className={`font-light border-b-[1px] w-full py-4 pl-5 border-skyblue ${
                isChecked ? "line-through text-lightorange" : ""
              }`}>
              {item.title}
            </p>
          </div>
          <div className=" flex gap-3 my-6 ">
            <div>
              <button
                onClick={showDialogEdit}
                className="hover:text-red-600 text-brown">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <DialogEdit
                openDialogEdit={openDialogEdit}
                item={item}
                onOK={(newValTitle) =>
                  handleOkEdit({ id: item.id, title: newValTitle })
                }
                onCancel={handleCancelEdit}
              />
            </div>
            <div>
              <button
                onClick={showDialogDelete}
                className="hover:text-red-600 text-reddele">
                <i className="fa-solid fa-trash"></i>
              </button>
              <DialogDelete
                openDialogDelete={openDialogDelete}
                onOK={() => handleOkDelete(item.id)}
                onCancel={handleCancelDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTodo;
