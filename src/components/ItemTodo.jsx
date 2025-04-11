import React, { useState } from "react";
import { DialogEdit } from "./dialogEdits/DialogEdit";
import DialogDelete from "./dialogDelete/DialogDelete";
const ItemTodo = ({ item, onEditTodo, onDeleteTodo, onToggleChecked }) => {
  const [isOpenDialogEdit, setIsOpenDialogEdit] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const showDialogEdit = () => {
    setIsOpenDialogEdit(true);
  };
  const handleOkEdit = (data) => {
    onEditTodo(data);
    setIsOpenDialogEdit(false);
  };
  const handleCancelEdit = () => {
    setIsOpenDialogEdit(false);
  };
  const showDialogDelete = () => {
    setOpenDialogDelete(true);
  };
  const handleOkDelete = (id) => {
    onDeleteTodo(id);
    setOpenDialogDelete(false);
  };
  const handleCancelDelete = () => {
    setOpenDialogDelete(false);
  };
  const handleCheckboxChange = (item) => {
    onToggleChecked(item);
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
                checked={item.completed}
                onChange={() => handleCheckboxChange(item)}
              />
              <span className="absolute w-5 h-5 flex items-center justify-center opacity-0 transition-opacity duration-200 peer-checked:opacity-100">
                <i className="fa-solid fa-check text-lightorange text-xs"></i>
              </span>
            </label>
            <p
              className={`font-light border-b-[1px] w-full py-4 pl-5 border-skyblue ${
                item.completed ? "line-through text-lightorange" : ""
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
                openDialogEdit={isOpenDialogEdit}
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
